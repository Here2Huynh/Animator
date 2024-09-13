import { Keyframes, keyframes } from "@emotion/react";

const slitOutVertical: Keyframes = keyframes`
    0% {
        transform: translateZ(0) rotateY(0);
        opacity: 1;
    }
    54% {
        transform: translateZ(-160px) rotateY(87deg);
        opacity: 1;
    }
    100% {
        transform: translateZ(-800px) rotateY(90deg);
        opacity: 0;
    }
`;

export const slitOutVerticalAnimation: string = `${slitOutVertical} 0.5s ease-in both`;

const fadeOut: Keyframes = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const fadeOutAnimation: string = `${fadeOut} 1s ease-out both`;
