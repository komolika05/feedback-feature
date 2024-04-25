import React, { useState, useEffect } from "react";
import "./style.scss";
import FabButton from "../FabButton/FabButton";
import DocumentIcon from "../../assets/icons/document.png";
import CloseIcon from "../../assets/icons/close.png";
import FeedbackIcon from "../../assets/icons/feedback.png";
import WriteIcon from "../../assets/icons/write.png";
import LikesIcon from "../../assets/icons/likes.png";
import FlagIcon from "../../assets/icons/flag.png";

import FabMenuItem from "../FabMenuItem/FabMenuItem";
import FabCard from "../FabCard/FabCard";
import Dropdown from "../Form/Dropdown/Dropdown";
import TextArea from "../Form/TextArea/TextArea";
import TextInput from "../Form/TextInput/TextInput";

function shouldShowOption(allowedOptions, optionType) {
  return allowedOptions.includes(optionType);
}

const dropdownOptions = [
  {
    label: "Concept Cards",
    value: "concept_cards",
  },
  {
    label: "Interview Questions",
    value: "interview_questions",
  },
  {
    label: "Practice Questions",
    value: "practice_questions",
  },
  {
    label: "Quizzes",
    value: "quizzes",
  },
  {
    label: "Others",
    value: "others",
  },
];

function FloatingAction({
  optionsToShow = ["contactUs", "suggestions", "feedback", "issue"],
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  const [issueText, setIssueText] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [suggestionText, setSuggestionUsText] = useState("");
  const [contactUsText, setContactUsText] = useState("");

  const [toastMessage, setToastMessage] = useState("");

  function isFormSubmissionEnabled() {
    if (selectedOption === "issue") {
      return issueText.length;
    }

    if (selectedOption === "feedback") {
      return feedbackText.length;
    }

    if (selectedOption === "suggestions") {
      return suggestionText.length;
    }

    if (selectedOption === "contactUs") {
      return contactUsText.length;
    }

    return true;
  }

  const fabMenuItems = [
    {
      key: "issue",
      title: "Report an Issue",
      iconUrl: FlagIcon,
      formDetails: {
        title: "Let us know about the Issue you are facing right now!",
        inputs: [
          <Dropdown label="Choose a section" labelValues={dropdownOptions} />,
          <TextArea
            label="Describe the Issue in detail"
            isMandatory
            onChangeText={(text) => setIssueText(text)}
            value={issueText}
          />,
        ],
        thankYouMessage:
          "Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon!",
      },
    },
    {
      key: "feedback",
      title: "Share Feedback",
      iconUrl: LikesIcon,
      formDetails: {
        title: "Let us know your Feedback about us!",
        inputs: [
          <TextArea
            onChangeText={(text) => setFeedbackText(text)}
            value={feedbackText}
          />,
        ],
        thankYouMessage: "Thanks for your Valuable Feedback!",
      },
    },
    {
      key: "suggestions",
      title: "Give Suggestions",
      iconUrl: WriteIcon,
      formDetails: {
        title: "Share your Suggestions with us for a chance to earn rewards!",
        inputs: [
          <Dropdown label="Choose a section" labelValues={dropdownOptions} />,
          <TextArea
            label="Describe the Suggestion in detail"
            isMandatory
            onChangeText={(text) => setSuggestionUsText(text)}
            value={suggestionText}
          />,
        ],
        thankYouMessage: "Thanks for your Valuable Suggestion!",
      },
    },
    {
      key: "contactUs",
      title: "Contact Us",
      iconUrl: FeedbackIcon,
      formDetails: {
        title: "Get in Contact with us for your queries",
        inputs: [
          <TextInput label="Your Name" placeholder="Enter Your Name" />,
          <TextArea
            label="What would you like to ask?"
            isMandatory
            onChangeText={(text) => setContactUsText(text)}
            value={contactUsText}
          />,
        ],
        thankYouMessage: "We will get back to you as soon as possible!",
      },
    },
  ];

  const filteredOptions = fabMenuItems.filter((option) =>
    shouldShowOption(optionsToShow, option.key)
  );

  const selectedMenuItem = fabMenuItems.find(
    (item) => item.key === selectedOption
  );

  useEffect(() => {
    if (toastMessage.length) {
      setTimeout(() => {
        setToastMessage("");
      }, 5000);
    }
  }, [toastMessage]);

  return (
    <div
      className={`floating-action-container ${
        selectedOption ? "fab-menu-mobile-item" : ""
      }`}
    >
      {selectedOption && (
        <FabCard
          formDetails={selectedMenuItem.formDetails}
          isSubmitAllowed={isFormSubmissionEnabled()}
          onSubmit={() => {
            setToastMessage(selectedMenuItem.formDetails.thankYouMessage);

            if (selectedOption === "contactUs") {
              setContactUsText("");
            }

            if (selectedOption === "issue") {
              setIssueText("");
            }

            if (selectedOption === "suggestions") {
              setSuggestionUsText("");
            }

            if (selectedOption === "feedback") {
              setFeedbackText("");
            }

            setSelectedOption(null);
            setIsMenuOpen(false);
          }}
        />
      )}

      {toastMessage && (
        <div className="toast">
          <div class="triangle"></div>
          {toastMessage}
        </div>
      )}

      <div
        className={`floating-action-menu ${
          selectedOption && "floating-action-menu-row"
        }`}
      >
        {isMenuOpen && (
          <>
            {filteredOptions.map(({ key, title, iconUrl }, idx) => (
              <FabMenuItem
                key={key}
                title={title}
                iconUrl={iconUrl}
                onPress={() => {
                  setSelectedOption(key);
                }}
                showLabel={!selectedOption}
                isSelected={key === selectedOption}
              />
            ))}
          </>
        )}

        <FabButton
          onIconPress={() => {
            const currentState = isMenuOpen;
            setIsMenuOpen(!currentState);
            if (currentState) {
              setSelectedOption(null);
            }
          }}
          iconUrl={!isMenuOpen ? DocumentIcon : CloseIcon}
        />
      </div>
    </div>
  );
}

export default FloatingAction;
