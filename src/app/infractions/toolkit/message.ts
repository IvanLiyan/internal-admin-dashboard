import { graphql } from "src/schema";

export const DisputeMessagesQuery = graphql(`
  query Disputes_Messages($warningId: ObjectIdType) {
    policy {
      merchantWarning(id: $warningId) {
        replies {
          senderType
          senderName
          message
          date {
            unix
          }
        }
        trackingDispute {
          messages {
            senderType
            senderName
            message
            date {
              unix
            }
          }
        }
      }
    }
  }
`);
