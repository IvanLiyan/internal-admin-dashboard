import React from "react";
import { Button } from "@mui/material";
import { useToast } from "@app/core/toast/ToastProvider";
import {
  ClaimNotices,
  DsaMutations,
  DsaMutationsClaimNoticesArgs,
} from "@schema";
import { gql, useMutation } from "urql";

type ClaimNoticeResponse = {
  readonly dsa: Pick<DsaMutations, "claimNotices"> & {
    readonly claimNotices: ClaimNotices;
  };
};

const ClaimNotice = gql<ClaimNoticeResponse, DsaMutationsClaimNoticesArgs>`
  mutation NoticePortal_ClaimNotice($input: ClaimNoticesInput!) {
    dsa {
      claimNotices(input: $input) {
        ok
        message
      }
    }
  }
`;

export type ClaimNoticeButtonProps = {
  readonly noticeId: string;
  readonly refetchNotice: () => void;
};

const ClaimNoticeButton: React.FC<ClaimNoticeButtonProps> = (
  props: ClaimNoticeButtonProps
) => {
  const { noticeId, refetchNotice } = props;
  const toast = useToast();
  const [, claimNotice] = useMutation(ClaimNotice);

  const handleClaimNotice = async () => {
    const variables: DsaMutationsClaimNoticesArgs = {
      input: { noticeIds: [noticeId] },
    };
    const { data, error } = await claimNotice(variables);
    if (error || data == null) {
      toast.alert("error", "Something went wrong");
      return;
    }

    const {
      dsa: {
        claimNotices: { ok, message },
      },
    } = data;

    if (!ok) {
      toast.alert("error", message);
      return;
    }

    toast.alert("success", "Notice claimed successfully");
    refetchNotice();
  };

  return (
    <Button
      disableElevation
      variant="contained"
      sx={{
        textTransform: "capitalize",
        borderRadius: 10,
      }}
      onClick={handleClaimNotice}
    >
      Claim Review
    </Button>
  );
};

export default ClaimNoticeButton;
