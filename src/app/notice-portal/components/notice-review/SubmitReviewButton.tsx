import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useToast } from "@app/core/toast/ToastProvider";
import {
  CompleteNoticeReview,
  DsaMutations,
  DsaMutationsCompleteNoticeReviewArgs,
} from "@schema";
import { gql, useMutation } from "urql";
import Modal from "@app/core/components/Modal";

type SubmitReviewResponse = {
  readonly dsa: Pick<DsaMutations, "completeNoticeReview"> & {
    readonly completeNoticeReview: CompleteNoticeReview;
  };
};

const SubmitReview = gql<
  SubmitReviewResponse,
  DsaMutationsCompleteNoticeReviewArgs
>`
  mutation NoticePortal_SubmitReview($input: CompleteNoticeReviewInput!) {
    dsa {
      completeNoticeReview(input: $input) {
        ok
        message
      }
    }
  }
`;

export type SubmitReviewButtonProps = {
  readonly noticeId: string;
  readonly refetchNotice: () => void;
};

const SubmitReviewButton: React.FC<SubmitReviewButtonProps> = (
  props: SubmitReviewButtonProps
) => {
  const { noticeId, refetchNotice } = props;
  const toast = useToast();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [responseText, setResponseText] = useState<string>("");
  const [, submitReview] = useMutation(SubmitReview);

  const handleSubmitReview = async () => {
    const variables: DsaMutationsCompleteNoticeReviewArgs = {
      input: { noticeId: noticeId, reviewResponse: "some Response" },
    };
    const { data, error } = await submitReview(variables);
    if (error || data == null) {
      toast.alert("error", "Something went wrong");
      return;
    }

    const {
      dsa: {
        completeNoticeReview: { ok, message },
      },
    } = data;

    if (!ok) {
      toast.alert("error", message);
      return;
    }

    toast.alert("success", "Notice reviewed successfully");
    setOpen(false);
    refetchNotice();
    router.push("/notice-portal/notice-management");
  };

  return (
    <>
      <Button
        disableElevation
        variant="contained"
        sx={{
          textTransform: "capitalize",
          borderRadius: 10,
          ml: 1,
        }}
        onClick={() => setOpen(true)}
      >
        Submit Review
      </Button>
      <Modal
        open={open}
        title="Submit Review"
        onClose={() => setOpen(false)}
        buttonText="Submit"
        onClick={handleSubmitReview}
        disabled={!responseText}
      >
        <Container sx={{ mt: 2, mb: 2 }}>
          <Typography>Response</Typography>
          <TextField
            multiline
            fullWidth
            required
            placeholder="Review response"
            rows={4}
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)}
          />
        </Container>
      </Modal>
    </>
  );
};

export default SubmitReviewButton;
