import { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { gql, useQuery } from "urql";
import { Box, Container, Typography } from "@mui/material";
import { useToast } from "@app/core/toast/ToastProvider";
import { DsaHubNoticeArgs, NoticeSchema } from "@schema";
import NoticeDetails from "@app/notice-portal/components/notice-review/NoticeDetails";
import NoticeReviewSection from "@app/notice-portal/components/notice-review/NoticeReview";

type GetNoticeResponse = {
  readonly dsa: {
    readonly notice: NoticeSchema;
  };
};

const GetNotice = gql<GetNoticeResponse, DsaHubNoticeArgs>`
  query GetNotice($noticeId: ObjectIdType!) {
    dsa {
      notice(noticeId: $noticeId) {
        id
        status
        description
        datetimeCreated {
          datetime
        }
        datetimeDisputed {
          datetime
        }
        notifierName
        notifierEmail
        notifier {
          organization
        }
        lastClaimedUser {
          id
          email
        }
        supportFiles {
          id
          displayFilename
          fileUrl
        }
        disputeDescription
        disputeReviewResponse
        disputeSupportFiles {
          id
          displayFilename
          fileUrl
        }
      }
    }
  }
`;

const NoticeReview: NextPage<Record<string, never>> = () => {
  const searchParams = useSearchParams();
  const toast = useToast();
  const [notice, setNotice] = useState<NoticeSchema | null>(null);

  const variables: DsaHubNoticeArgs = {
    noticeId: searchParams.get("notice_id") as string,
  };

  const [{ data, error }, refetch] = useQuery({
    query: GetNotice,
    variables,
    pause: !searchParams.get("notice_id"),
  });

  const refetchNotice = useCallback(() => {
    refetch({ requestPolicy: "network-only" });
  }, [refetch]);

  useEffect(() => {
    if (error) {
      toast.alert("error", `Encountered error: ${error.message}`);
      return;
    }

    if (data == undefined) {
      return;
    }

    const {
      dsa: { notice },
    } = data;
    setNotice(notice);
    if (!notice) {
      toast.alert("error", "Notice does not exist!");
    }
  }, [data, error, setNotice, toast]);

  const renderPage = () => {
    return (
      notice && (
        <>
          <NoticeDetails notice={notice} />
          <NoticeReviewSection notice={notice} refetchNotice={refetchNotice} />
        </>
      )
    );
  };

  return (
    <Container maxWidth={false} sx={{ p: 7 }} disableGutters>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: "fontWeightBold" }}>
          Notice Review
        </Typography>
      </Box>
      {renderPage()}
    </Container>
  );
};

export default NoticeReview;
