import { useRef } from "react"

import humanImage from "../assets/human.svg"

import { Slider } from "@/components/ui/slider"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type TPoint = [number, number]


export const defaultPointSize = 20

export const bodyPoints = [
  [74, 22],
  [17, 138]
] as TPoint[]


export default function HumanBody() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="flex flex-col m-10 justify-center items-center relative" onClick={({ clientX, clientY }) => {
      const { left, top } = containerRef.current!.getBoundingClientRect()
      console.log(clientX - left, clientY - top)
    }}>
      <img className="w-[300px]" src={humanImage} alt="human" />
      {bodyPoints.map(([x, y]) => (
        <div key={`${x} ${y}`} className="absolute" style={{
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
              <div>
                <p>疼痛指數</p>
                <Slider defaultValue={[50]} max={100} step={20} />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ))}
    </div>
  )
}