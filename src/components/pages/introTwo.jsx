import React, { useState, useEffect, useContext } from "react";
import "../styles/introTwo.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../App";

const IntroTwo = () => {
  const [fadeEffects, setFadeEffects] = useState("fade-enters");
  const navigate = useNavigate();
  const { setColseBgmusic } = useContext(DataContext);
  const [currentDialogueTIndex, setCurrentDialogueTIndex] = useState(0);


  const handleNextT = () => {
  if (currentDialogueTIndex < dialogueT.length - 1) {
    setCurrentDialogueTIndex(currentDialogueTIndex + 1);
    // Handle choices or character changes based on the dialogue progress
  } else {
    handleButtonClick();
  }
};

  const handleBackT = () => {
    if (currentDialogueTIndex > 0) {
      setCurrentDialogueTIndex(currentDialogueTIndex - 1);
      // Handle choices or character changes based on the dialogue progress
    } else {
      // End of dialogue
    }
  };
  const [dialogueT, setDialogueT] = useState([
    {
      speaker: "-- Microsoft Edge  --",
      text: "การเปิดตัวเร่งกราฟิก บน Browser จะช่วยทำให้ตัวเว็บไซต์ทำงานได้เต็มประสิทธิภาพโดยเฉพาะในด้านการแสดงผลของโมเดลสามมิติ ในการปรับตัวเร่งกราฟิกสำหรับ Edge Browser จะเริ่มจาก Open Settings >> System >> Use graphics acceleration when available ดังภาพ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Tutorial/Edge.png?updatedAt=1713281651233",
      button: "หน้าถัดไป",
      buttonT: "ย้อนกลับ",
      link: "",
    },
    {
      speaker: "-- Google Chrome  --",
      text: "ในการปรับตัวเร่งกราฟิกสำหรับ Chrome Browser จะเริ่มจาก Open Settings >> System >> Use graphics acceleration when available ดังภาพ",
      bg: "https://ik.imagekit.io/vsfmz5htw/Tutorial/Chome.png?updatedAt=1713281651161",
      button: "เข้าสู่เว็บไซต์",
      buttonT: "ย้อนกลับ",
      link: "/chaptertwo",
    },
  ]);

  useEffect(() => {
    setColseBgmusic(true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeEffects(fadeEffects + " fade-enter-actives");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClick = () => {
    setFadeEffects("fade-exit-actives");
    setTimeout(() => {
      navigate("/home");
    }, 3000); // 3000ms is the duration of the fade-out effect
  };

  return (
    <div className={`instructions-overlays ${fadeEffects}`}>
      <div className="lg:text-5xl font-bold lg:mb-5 md:text-4xl md:pb-5 md:pt-[19rem] lg:pb-0 lg:pt-0  ">
        <h1>
          คำชี้แจง: สิ่งที่ควรทราบก่อนเข้าเว็บไซต์ (ตัวเร่งกราฟิก บน Browser)
        </h1>
      </div>
      <hr />

      <div className=" flex lg:flex-row md:flex-col  mx-20 mt-8  rounded-xl items-center justify-center lg:bg-emerald-700 md:bg-none m-2 ">
        <div className="w-[66%]">
          <img
            className="  max-w-[1440px] w-full h-auto rounded-xl "
            src={dialogueT[currentDialogueTIndex].bg}
          />
        </div>
        <div className=" w-[33%] m-5 text-center">
          <h1 className="text-4xl lg:text-4xl font-extrabold text-white text-center pt-5">
            {dialogueT[currentDialogueTIndex].speaker}
          </h1>
          <p className="lg:text-2xl md:text-lg text-center m-2">
            {dialogueT[currentDialogueTIndex].text}
          </p>
          <div className=" flex justify-around">
            {currentDialogueTIndex === 1 && (
              <button
                onClick={() => {
                  handleBackT();
                }}
                type="button"
                className=" animate-pulse mt-12 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
              >
                {dialogueT[currentDialogueTIndex].buttonT}
              </button>
            )}
            <button
              onClick={() => {
                // handleButtonClick();
                handleNextT();
              }}
              type="button"
              className=" animate-pulse mt-12 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
            >
              {dialogueT[currentDialogueTIndex].button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroTwo;