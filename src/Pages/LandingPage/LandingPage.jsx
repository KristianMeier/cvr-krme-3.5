import { PlaceholderWrapper } from "../../Components/Placeholder/PlaceholderWrapper";
import { JsData } from "../../Data/Data";
import { Placeholder } from "../../Components/Placeholder/Placeholder";
import { Modal } from "../../Components/Other/Modal";
import { SearchWrapper } from "../../Components/Search/SearchWrapper";

const placeholderWrapperData = [
  JsData.placeholderData.rowOne,
  JsData.placeholderData.rowTwo,
  JsData.placeholderData.rowThree,
];

export const LandingPage = () => (
  <>
    <SearchWrapper />
    {placeholderWrapperData.map((placeholders) => (
      <PlaceholderWrapper key={placeholders}>
        {placeholders.map(({ className, title }) => (
          <Placeholder key={title} className={className} title={title} />
        ))}
      </PlaceholderWrapper>
    ))}
    <Modal title="You have signed out" />
  </>
);
