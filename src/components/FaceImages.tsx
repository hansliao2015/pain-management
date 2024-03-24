import { useState, useEffect } from "react"

import sad0 from "../assets/sad-0.svg"
import sad2 from "../assets/sad-2.svg"
import sad4 from "../assets/sad-4.svg"
import sad6 from "../assets/sad-6.svg"
import sad8 from "../assets/sad-8.svg"
import sad10 from "../assets/sad-10.svg"
import blank from "../assets/blank.svg"

const faces = [sad0, sad2, sad4, sad6, sad8, sad10];

export default function FaceComponent() {
  const [faceButtons, setFaceButtons] = useState([blank, blank, blank, blank, blank, blank])
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)
  const [hoveringIndex, setHoveringIndex] = useState<number | null>(null)

  useEffect(() => {
    updateFaceButtons()
  }, [hoveringIndex, clickedIndex])

  function updateFaceButtons() {
    if (hoveringIndex === null) {
      if (clickedIndex !== null) setFaceButtons(faces.map((face, index) => index <= clickedIndex ? face : blank));
      else setFaceButtons([blank, blank, blank, blank, blank, blank])
    }
    else if (clickedIndex !== null) {
      if (hoveringIndex <= clickedIndex) setFaceButtons(faces.map((face, index) => index <= clickedIndex ? face : blank));
      else setFaceButtons(faces.map((face, index) => index <= hoveringIndex ? face : blank));
    }
    else setFaceButtons(faces.map((face, index) => index <= hoveringIndex ? face : blank));
  }

  function handleOnClick(index: number) {
    setClickedIndex(index);
  }

  function handleOnMouseOver(index: number) {
    setHoveringIndex(index);
  }

  function handleOnMouseLeave() {
    setHoveringIndex(null);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {faceButtons.map((face, faceIndex) => (
          <img
            key={faceIndex}
            src={face}
            alt={`Face ${faceIndex}`}
            onMouseOver={() => handleOnMouseOver(faceIndex)}
            onMouseLeave={handleOnMouseLeave}
            onClick={() => handleOnClick(faceIndex)}
            className="cursor-pointer size-[30px]"
          />
        ))}
        
      </div>
      <div>
        <p>
          {clickedIndex === null ? "請選擇你的疼痛指數" : `你選擇了 ${(clickedIndex)*2}分的疼痛指數!`}
        </p>
      </div>
    </div>
  )
}
