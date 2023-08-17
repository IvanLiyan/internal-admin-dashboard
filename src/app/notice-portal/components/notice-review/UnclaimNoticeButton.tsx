import React from "react";
import { Button } from "@mui/material";
import { useToast } from "@app/core/toast/ToastProvider";
import {
  DsaMutations,
  DsaMutationsUnclaimNoticesArgs,
  UnclaimNotices,
} from "@schema";
import { gql, useMutation } from "urql";

type UnclaimNoticeResponse = {
  readonly dsa: Pick<DsaMutations, "unclaimNotices"> & {
    readonly unclaimNotices: UnclaimNotices;
  };
};

const UnclaimNotice = gql<
  UnclaimNoticeResponse,
  DsaMutationsUnclaimNoticesArgs
>`
  mutation NoticePortal_UnclaimNotice($input: UnclaimNoticesInput!) {
    dsa {
      unclaimNotices(input: $input) {
        ok
        message
      }
    }
  }
`;

export type UnclaimNoticeButtonProps = {
  readonly noticeId: string;
  readonly refetchNotice: () => void;
};

const UnclaimNoticeButton: React.FC<UnclaimNoticeButtonProps> = (
  props: UnclaimNoticeButtonProps
) => {
  const { noticeId, refetchNotice } = props;
  const toast = useToast();
  const [, unclaimNotice] = useMutation(UnclaimNotice);

  const handleUnclaimNotice = async () => {
    const variables: DsaMutationsUnclaimNoticesArgs = {
      input: { noticeIds: [noticeId] },
    };
    const { data, error } = await unclaimNotice(variables);
    if (error || data == null) {
      toast.alert("error", "Something went wrong");
      return;
    }

    const {
      dsa: {
        unclaimNotices: { ok, message },
      },
    } = data;

    if (!ok) {
      toast.alert("error", message);
      return;
    }

    toast.alert("success", "Notice unclaimed successfully");
    refetchNotice();
  };

  return (
    <Button
      disableElevation
      variant="contained"
      sx={{
        textTransform: "capitalize",
        borderRadius: 10,
        ml: 1,
      }}
      onClick={handleUnclaimNotice}
    >
      Unclaim Notice
    </Button>
  );
};

export default UnclaimNoticeButton;
