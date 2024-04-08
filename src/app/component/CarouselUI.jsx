"use client";
import React from 'react'
import data from './data.json'
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RestoreIcon from '@mui/icons-material/Restore';

const CarouselUI = () => {
    return (
        <>
            <div className='headers'>
                <div classname="header-1" style={{
                    color: '#7a6eaa',
                    margin: '15px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    width: '100px',
                    textAlign: 'center'
                }}>
                    <h1>BNBUSD</h1>
                    <h3>$2.34534</h3>
                </div >
                <img src="https://pngimg.com/d/coin_PNG36871.png" alt="" />
                <div className="header-icon-3" style={{ display: "flex" }}>
                    <div>
                        <AccessAlarmIcon />
                    </div>
                    <div>
                        <HelpOutlineIcon />
                    </div>
                    <div>
                        <EmojiEventsIcon />
                    </div>
                    <div>
                        <RestoreIcon />
                    </div>
                </div>
            </div >
            <div className='section'>
                {data.map((item) => (
                    <div className='cards' key={item.id}>
                        <div className='card-head'>
                            <p> {item.status === 'expired' ? (
                                <>
                                    <DoDisturbAltIcon style={{ color: 'blue', backgroundColor: "white" }} />
                                    <span style={{ marginLeft: "5px", backgroundColor: "white" }}>EXPIRED</span>
                                </>

                            ) : item.status === 'live' ? (
                                <>
                                    <PlayCircleFilledIcon style={{ color: 'blue', backgroundColor: "white" }} />LIVE
                                </>

                            ) : item.status === 'later' ? (
                                <>
                                    <WatchLaterIcon style={{ color: 'blue', backgroundColor: "white" }} />LATER
                                </>

                            ) : (
                                <>
                                    <PlayCircleOutlineIcon style={{ color: 'blue', backgroundColor: "white" }} />NEXT
                                </>

                            )}</p>
                            <p className='text-blue-600'>
                                {item.color}
                            </p>
                        </div>

                        <div className='cards-content'>
                            <div className='cards-1'>
                                <div className='card-box-main'>
                                    <div>
                                        <div className='card-box-1'>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='card-box-2'>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-box-up-content'>
                                    <h1>UP</h1>
                                    <p>2.15x Payout</p>
                                </div>
                            </div>
                            <div className='cards-2'>
                                {item.status === 'next' ? (
                                    <div className='sub-cards-23' >
                                        <div className='sub-cards-231'>
                                            <p>Prize Pool:</p>
                                            <span>2.3760BNB</span>
                                        </div>
                                        <div className='sub-cards-buttons'>
                                            <button className="bg-green-600">ENTER UP</button>
                                            <button className="sub-cards-down-btn">ENTER DOWN</button>
                                        </div>

                                    </div>
                                ) : item.status === 'later' ? (
                                    <div className='sub-cards-2' >
                                        <div className='sub-cards-21'>
                                            <div className="sub-card-later">
                                                <div><p style={{ fontSize: "1.8rem" }}>Entry starts</p></div>
                                                <div><h3>~00.38</h3></div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='sub-cards-2' >
                                        <div className='sub-cards-21'>
                                            <div>
                                                <div><p>LAST PRICE</p></div>
                                                <div><h3>$54545454</h3></div>
                                            </div>
                                            <div>
                                                <div><p>Locked Price:</p></div>
                                                <div><span>Prize Pool:</span></div>
                                            </div>
                                        </div>
                                        <div className='sub-cards-3'>
                                            <div><button>| $-0.414</button></div>
                                            <div>
                                                <p>545454</p>
                                                <span>8.54BNM</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='cards-3'>
                                <div className='card-box-main1'>
                                    <div>
                                        <div className='card-box-1'>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='card-box-2'>
                                        </div>
                                    </div>
                                    <div className='card3-box-up-content'>
                                        <p>1.87x Payout</p>
                                        <h1>DOWN</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CarouselUI