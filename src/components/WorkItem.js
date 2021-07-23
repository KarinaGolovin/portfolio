import React, {useState} from "react";
import cn from 'classnames';
import { useKeenSlider } from "keen-slider/react";

export const WorkItem = (props) => {
    const [sliderRef] = useSlider({isFreeMode: props.images.length === 1});

    return (
        <div className={cn(`wrapper wrapper-${props.index + 1}`)}>
            <div className="short-description">
                <div className="link-item">
                    {props.link && (
                        <a href={props.link} target="_blank">visit page</a>
                    )}
                    {!props.link && props.underConstruction !== false && (
                        <span className="color-secondary">under construction</span>
                    )}
                </div>
                <div className="content-title">{props.title}</div>
            </div>
            <div className={cn(`work-item work-item-${props.index + 1}`, {
                'work-item--active': props.active
            })}>
                <div className="slider-counter">
                    <div className="slider-counter-item slider-counter-item--active"></div>
                    <div className="slider-counter-item"></div>
                    <div className="slider-counter-item"></div>
                </div>
                <div className="work-item__actions">
                    <button className="work-text_toggle" onClick={props.onShowDescriptionClick}></button>
                </div>
                <div ref={sliderRef} className="keen-slider">
                    {props.images.map(({src, alt = ""}, index) => {
                        return (
                            <div key={index} className="keen-slider__slide number-slide1">
                                <img className="image-item" src={src} alt={alt}/>
                            </div>
                        )
                    })}
                </div>
                <div className="image-description">
                    <div className="row">
                        <div className="text-item">
                            <div className="content-title">{props.title}</div>
                            <div className="content-text">{props.text}</div>
                        </div>
                        <div className="link-item">
                            {props.link && (
                                <a href={props.link} target="_blank">visit page</a>
                            )}
                            {!props.link && props.underConstruction !== false && (
                                <span className="color-secondary">under construction</span>
                            )}
                        </div>
                    </div>
                    {props.description ? <div className="row">
                        <div className="text-item grid-fullwidth">
                            <div className="content-title">Problem solved</div>
                            <div className="content-text">{props.description}</div>
                        </div>
                    </div> : null}
                    {/*<div className="row">*/}
                    {/*    <div className="icon-item grid-fullwidth">*/}
                    {/*        <img  className="image-item" src="/media/icons/arrow2.png" alt="show more arrow"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>

    )
}

const useSlider = ({isFreeMode}) => {
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1200,
        mode: isFreeMode ? 'free' : 'snap',
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
    });

    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    React.useEffect(() => {
        const getRandomInterval = () => {
            const randomTimeOut = Math.floor(300 + (Math.random() * 1500));
            return randomTimeOut - (randomTimeOut % 100);
        }
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 4000 + (getRandomInterval()))
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    return [sliderRef];
}