import { RefObject, useEffect, useRef } from "react";
import * as S from "./styled";

const ApplyButton: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);


    const size = 60; // px
    const color = "#fff";
    const duration = 250; // s

    useEffect(() => {
        const applyContainer = () => {
            ref.current?.classList?.add('effect-container');
        };

        const applyStyles = (e: any) => {
            const { offsetX, offsetY } = e;
            const style = ref.current?.style;
            const sizeOffset = 20;

            style?.setProperty('--effect-duration', `${duration}ms`);
            style?.setProperty('--effect-top', `${offsetY - sizeOffset}px`);
            style?.setProperty('--effect-left', `${offsetX - sizeOffset}px`);
            style?.setProperty('--effect-height', `${size}px`);
            style?.setProperty('--effect-width', `${size}px`);
            style?.setProperty('--effect-color', color);
        }

        const onClick = (e: any) => {
            ref.current?.classList.remove('active');
            applyStyles(e)
            ref.current?.classList.add('active');
        }

        applyContainer();

        ref.current?.addEventListener('mouseup', onClick);

        const cleanupRef = ref.current;

        return () => {
            cleanupRef?.removeEventListener('mouseup', onClick);
        }
    }, [])

    return (
        <>
            <S.ButtonDiv ref={ref}>
                <S.Button>신청하기</S.Button>
            </S.ButtonDiv>
        </>
    )
}

export default ApplyButton;