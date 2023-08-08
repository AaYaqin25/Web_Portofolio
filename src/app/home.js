import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    const [isRotate, setIsRotate] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const toggleRotation = () => {
        setIsRotate(true);
        setTimeout(() => {
            setIsRotate(false);
        }, 2000);
    };

    return (
        <section id='home'>
            <div className='card main-menu'>
                <div className='card-body'>
                    <div className='container p-2'>
                        <div className='d-flex p-5 justify-content-between responsive-mobile'>
                            <div className='row main'>
                                <div className='col'>
                                    <p className='fs-1 fw-bold mb-0'>Hi 👋,</p>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='fs-1 fw-bold mb-0'>I'm Ahmad Ainul Yaqin</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='fs-1 fw-bold'>Fullstack Developer</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='fs-5 text-secondary text-break' style={{ maxWidth: '500px' }}>I am a fullstack developer at Roots and I can be a website or mobile apps developer.
                                            i work with PHP, Laravel, Javascript, Node.js, Express.js, React.js, Vue.js, Next.js, React Native</p>
                                    </div>
                                </div>
                                <div className='mt-5 btn-mobile'>
                                    <a href='https://api.whatsapp.com/send?phone=6289678425742&text=Halo saya ingin merkerut anda sebagai developer kami!' target='_blank' className='btn btn-outline-dark fw-bold' style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '1.5%', paddingBottom: '1.5%' }}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            HIRE ME
                                            <Icon icon="logos:whatsapp-icon" width={20} className='ms-2' />
                                        </div>
                                    </a>
                                    <a href='https://github.com/AaYaqin25?tab=repositories' target='_blank' className='btn btn-dark ms-4 fw-bold' style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '1.5%', paddingBottom: '1.5%' }}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            SEE MY PROJECT
                                            <Icon icon="skill-icons:github-light" width={20} className='ms-2' />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={`photo-container ${isRotate ? 'rotate' : ''}`} onClick={toggleRotation}>
                                {imageError ?
                                        <Icon icon="healthicons:ui-user-profile-negative" width={300} height={270} />
                                        :
                                        <Image src='/yaqin.jpg' alt='Foto' width={300} height={270} style={{ borderRadius: 30 }} onError={handleImageError} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}