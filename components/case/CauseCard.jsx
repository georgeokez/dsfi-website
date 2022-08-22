import React from 'react';
import Link from "next/link";

const CauseCard = ({ title, raisedValue, goalValue, progressValue, imageUrl, clickHandler }) => {
  return (
    <div className="wpo-case-single">
        <div className="wpo-case-item">
            <div className="wpo-case-img">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="wpo-case-content">
                <div className="wpo-case-text-top">
                    <h2>{title}</h2>
                    <div className="progress-section">
                        <div className="process">
                            <div className="progress">
                                <div className="progress-bar">
                                    <div className="progress-value"><span>{progressValue}</span>%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li><span>Raised:</span>{`$${raisedValue}.00`}</li>
                        <li><span>Goal:</span>{`$${goalValue}.00`}</li>
                    </ul>
                </div>
                <div className="case-btn">
                    <ul>
                        <li>
                            <Link onClick={clickHandler} href="/CaseSinglePage">
                                <a href="/DonatePage">Learn More</a> 
                            </Link>
                        </li>
                        <li>
                            <Link onClick={clickHandler} href="/DonatePage">
                                <a>Donate Now</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CauseCard;