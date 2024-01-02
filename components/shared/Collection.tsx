import { IEvent } from "@/lib/database/models/event.model";
import Card from "./Card";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  urlParamName?: string;
  page: number;
  totalPages?: number;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
};
const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  collectionType,
  urlParamName,
  limit,
  page,
  totalPages,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === "Events_Organized";
              const hidePrice = collectionType === "My_Tickets";

              return (
                <li key={event._id} className="flex justify-center">
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="wrapper bg-grey-50 min-h-[200px] flex-center flex-col w-full gap-3 rounded-2xl">
          <h3 className="h5-bold">{emptyTitle}</h3>
          <p>{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default Collection;
