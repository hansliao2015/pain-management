import { useRef } from "react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import humanImage from "../assets/human.svg"
import FaceImages from "./FaceImages"

type TPoint = [number, number]

export const defaultPointSize = 20

export const bodyPoints = {
  head: [150, 50] as TPoint,
  neck: [150, 100] as TPoint,
  leftShoulder: [100, 120] as TPoint,
  rightShoulder: [200, 120] as TPoint,
  leftElbow: [80, 150] as TPoint,
  rightElbow: [220, 150] as TPoint,
  leftWrist: [70, 180] as TPoint,
  rightWrist: [230, 180] as TPoint,
  leftHip: [120, 220] as TPoint,
  rightHip: [180, 220] as TPoint,
  leftKnee: [100, 300] as TPoint,
  rightKnee: [200, 300] as TPoint,
  leftAnkle: [90, 350] as TPoint,
  rightAnkle: [210, 350] as TPoint,
} as Record<string, TPoint>


export default function HumanBody() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="flex flex-col m-10 justify-center items-center relative" onClick={({ clientX, clientY }) => {
      const { left, top } = containerRef.current!.getBoundingClientRect()
      console.log(clientX - left, clientY - top)
    }}>
      <img className="w-[300px]" src={humanImage} alt="human" />
      {Object.entries(bodyPoints).map(([key, [x, y]]) => (
        <div key={key} className="absolute" style={{
          left: x,
          top: y
        }}>
          <Popover>
            <PopoverTrigger>
              <div className="transform -translate-x-1/2 -translate-y-1/2 bg-background border-foreground border-[3px] rounded-full" style={{
                width: defaultPointSize,
                height: defaultPointSize
              }} />
            </PopoverTrigger>
            <PopoverContent>
              <div className=" flex flex-col items-center ">
                <p className="p-[5px] text-[30px]">{key}的疼痛指數</p>
                <FaceImages />

              </div>
            </PopoverContent>
          </Popover>
        </div>
      ))}
    </div>
  )
}