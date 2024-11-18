export const highlightText = (fullText:string, textToHighlight:string) => {
    const textArray = fullText.split(new RegExp(`(${textToHighlight})`, "i"));
  
    return (
      <>
        {textArray.map((text, i) =>
          text?.toLowerCase() === textToHighlight?.toLowerCase() ? (
            <span key={i} className="text-primary">
              {text}
            </span>
          ) : (
            text
          )
        )}
      </>
    );
  };