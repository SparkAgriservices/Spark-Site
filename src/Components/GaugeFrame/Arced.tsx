import React, { useEffect, useState } from "react";
import { useGauge } from "use-gauge";

interface ArcedProps {
  value: number;
  label: string;
  name: string;
}

const START_ANGLE = 45;
const END_ANGLE = 315;

export function Arced(props: ArcedProps) {
  const { value, label, name } = props;
  const [animatedValue, setAnimatedValue] = useState(0);

  const gauge = useGauge({
    domain: [0, 100],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    numTicks: 21,
    diameter: 120
  });

  const needle = gauge.getNeedleProps({
    value: animatedValue, // Use the animated value for the needle
    baseRadius: 12,
    tipRadius: 2
  });

  useEffect(() => {
    const animationDuration = 1000; // Animation duration in milliseconds
    const animationStep = (value * 5) / animationDuration; // Step size for each animation frame
    let currentAnimatedValue = 0;

    const animationId = setInterval(() => {
      currentAnimatedValue += animationStep;
      if (currentAnimatedValue >= value) {
        currentAnimatedValue = value;
        clearInterval(animationId);
      }
      setAnimatedValue(currentAnimatedValue);
    }, 16); // Animation frame rate (approximately 60 frames per second)

    return () => {
      clearInterval(animationId);
    };
  }, [value]);

  return (
    <div style={{ padding: "1rem", textAlign: "center" ,position : "relative"}}>
      <h2 style={{marginBottom : "10vh"}}>{name}</h2>
      <svg
        style={{ width: "100%", overflow: "visible", padding: "0.5rem" }}
        {...gauge.getSVGProps()}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF0000" />
            <stop offset="50%" stopColor="#00FF00" />
            <stop offset="100%" stopColor="#0000FF" />
          </linearGradient>
        </defs>
        <g id="arcs">
          <path
            {...gauge.getArcProps({
              offset: 30,
              startAngle: START_ANGLE,
              endAngle: END_ANGLE
            })}
            fill="none"
            style={{
              stroke: "#E2E8F0",
              strokeLinecap: "round",
              strokeWidth: "24px"
            }}
          />
          <path
            {...gauge.getArcProps({
              offset: 30,
              startAngle: START_ANGLE,
              endAngle: gauge.valueToAngle(animatedValue) // Use the animated value for the arc
            })}
            fill="none"
            stroke="#FF0000"
            strokeLinecap="round"
            strokeWidth={24}
          />
        </g>
        <g id="ticks">
          {gauge.ticks.map((angle) => {
            const asValue = gauge.angleToValue(angle);
            const showText =
              asValue === 20 || asValue === 80 || asValue === 50;

            return (
              <React.Fragment key={`tick-group-${angle}`}>
                <line
                  className="stroke-gray-300"
                  strokeWidth={2}
                  style={{
                    stroke: "#CBD5E0",
                    strokeLinecap: "round",
                    strokeWidth: showText ? "2px" : "1px"
                  }}
                  {...gauge.getTickProps({ angle, length: showText ? 12 : 6 })}
                />
                {showText && (
                  <text
                    className="text-sm fill-gray-400 font-medium"
                    style={{
                      fill: "#CBD5E0",
                      fontSize: "0.875rem",
                      fontWeight: "500"
                    }}
                    {...gauge.getLabelProps({ angle, offset: 20 })}
                  >
                    {asValue}
                  </text>
                )}
              </React.Fragment>
            );
          })}
        </g>
        <g id="needle">
          <circle
            className="fill-gray-300"
            {...needle.base}
            r={20}
          />
          <circle className="fill-gray-700" {...needle.base} />
          <circle className="fill-gray-700" {...needle.tip} />
          <polyline className="fill-gray-700" points={needle.points} />
          <circle
            className="fill-white"
            cx={needle.base.cx}
            cy={needle.base.cy}
            r={4}
          />
        </g>
      </svg>
      <div style={{ marginTop: "1rem" }}>
        <p>{label}</p>
      </div>
      <h3>{animatedValue}</h3>
    </div>
  );
}
