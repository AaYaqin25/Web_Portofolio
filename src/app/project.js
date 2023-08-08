import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Project() {
    return (
        <section id="project">
            <div className="card mt-5 mb-5">
                <div className="card-body">
                    <div className='container p-2'>
                        <div className='p-5 responsive-mobile'>
                            <div className="row main">
                                <div className="mb-3">
                                    <div className="col">
                                        <p className="fs-3 fw-bold mb-0">Project</p>
                                    </div>
                                    <div className="col">
                                        <div className="long-line-4"></div>
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <a href="/dashboard.png" target="_blank">
                                                            <Image src="/dashboard.png" className="card-img-top" alt="..." width={500} height={200} />
                                                        </a>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <a href="/goods.png" target="_blank">
                                                            <Image src="/goods.png" className="card-img-top" alt="..." width={500} height={200} />
                                                        </a>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <a href="/units.png" target="_blank">
                                                            <Image src="/units.png" className="card-img-top" alt="..." width={500} height={200} />
                                                        </a>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <a href="/suppliers.png" target="_blank">
                                                            <Image src="/suppliers.png" className="card-img-top" alt="..." width={500} height={200} />
                                                        </a>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <a href="/customers.png" target="_blank">
                                                            <Image src="/customers.png" className="card-img-top" alt="..." width={500} height={200} />
                                                        </a>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <a href="/users.png" target="_blank">
                                                            <Image src="/users.png" className="card-img-top" alt="..." width={500} height={200} />
                                                        </a>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <a href="/purchases.png" target="_blank">
                                                            <Image src="/purchases.png" className="card-img-top" alt="..." width={500} height={200} />
                                                        </a>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <a href="/sales.png" target="_blank">
                                                            <Image src="/sales.png" className="card-img-top" alt="..." width={500} height={200} />
                                                        </a>
                                                    </div>
                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>

                                            <div className="card-body">
                                                <h5 className="card-title">Point Of Sales (POS)</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Build up by Javascript, NodeJS, ExpressJS, EJS, jQuery, PostgreSQL, Bootstrap, Trigger Function PLPGSQL</h6>
                                                <p className="card-text">Point of Sales or POS is a payment system that can facilitate transactions. POS can help in quick calculations, store customer data, calculate profits and losses, and recap sales reports.</p>
                                                <a href='https://github.com/AaYaqin25/Application-POS' target='_blank' className='btn btn-dark fw-bold'>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        SEE MY CODE
                                                        <Icon icon="skill-icons:github-light" width={20} className='ms-2' />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}