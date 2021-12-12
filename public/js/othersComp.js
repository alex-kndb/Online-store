Vue.component('top-banner', {
    template: `<section class="banner">
                    <div class="container">
                        <div class="banner__wrapper">
                            <img src="img/top-bg.png" alt="top-bg">
                            <div class="banner__title">
                                <p class="title-banner__upperstring">THE BRAND</p>
                                <p class="title-banner__buttomstring">OF LUXURIOUS <span
                                        class="title-banner__red-style">FASHION</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>`
});

Vue.component('offers', {
    template: `<section class="offer-block container">
                    <div class="top-wrapper">
                        <div class="offer top-wrapper__offer">
                            <a href="#" class="offer__link"><img class="offer__img" src="img/men.jpg" alt="men">
                                <div class="offer__title">
                                    <p class="offer__text">Hot Deal<br><span class="offer__red-style">For Men</span></p>
                                </div>
                            </a>
                        </div>
                        <div class="offer top-wrapper__offer">
                            <a href="#" class="offer__link"><img class="offer__img" src="img/women.jpg" alt="women">
                                <div class="offer__title">
                                    <p class="offer__text">30% Off<br><span class="offer__red-style">Women</span></p>
                                </div>
                            </a>
                        </div>
                        <div class="offer top-wrapper__offer">
                            <a href="#" class="offer__link"><img class="offer__img" src="img/child.jpg" alt="kids">
                                <div class="offer__title">
                                    <p class="offer__text">New Arrivals<br><span class="offer__red-style">For Kids</span></p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="bottom-offer offer">
                        <a href="#" class="offer__link">
                            <img class="bottom-offer__img offer__img" src="img/acсessories.jpg" alt="acсessories">
                            <div class="offer__title">
                                <p class="offer__text">Luxurious & trendy<br><span class="offer__red-style">Accessories</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </section>`
});

Vue.component('advantages', {
    template: `<div class="product__bottom-banner">
                    <div class="product__cont container">
                        <ul class="product__bottom-banner__list">
                            <li class="product__bottom-banner__item">
                                <div class="product__box">
                                    <img class="product__bottom-banner__img" src="img/truck.png" alt="truck-img">
                                    <h3 class="product__item__header">Free Delivery</h3>
                                    <p class="product__item__text">Worldwide delivery on&nbsp;all. Authorittively morph
                                        next-generation
                                        innovation with extensive models.</p>
                                </div>
                            </li>
                            <li class="product__bottom-banner__item">
                                <img class="product__bottom-banner__img" src="img/discount.png" alt="sale-img">
                                <h3 class="product__item__header">Sales & discounts</h3>
                                <p class="product__item__text">Worldwide delivery on&nbsp;all. Authorittively morph
                                    next-generation
                                    innovation with extensive models.</p>
                            </li>
                            <li class="product__bottom-banner__item">
                                <img class="product__bottom-banner__img" src="img/crown.png" alt="crown-img">
                                <h3 class="product__item__header">Quality assurance</h3>
                                <p class="product__item__text">Worldwide delivery on&nbsp;all. Authorittively morph
                                    next-generation
                                    innovation with extensive models.</p>
                            </li>
                        </ul>
                    </div>
                </div>`
});

Vue.component('client', {
    template: `<section class="client-section">
                    <div class="cont container">
                        <div class="comments">
                            <figure class="comment comment__left">
                                <img class="comment__img" src="img/client-left.png" alt="client-img">
                                <figcaption class="comment__caption">
                                    <p class="caption-comment__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                                        pulvinar purus condimentum“</p>
                                </figcaption>
                            </figure>
                        </div>

                        <div class="subscribe">
                            <div class="subscribe__head">
                                <p class="subscribe__header">Subscribe</p>
                                <p class="subscribe__subheader">FOR OUR NEWLETTER AND PROMOTION</p>
                            </div>
                            <form class="subscribe__form" action="#">
                                <input class="subscribe__input" placeholder="Enter Your Email" type="email">
                                <button class="subscribe__btn" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </section>`
});

Vue.component('footer-comp', {
    template: `<footer class="footer">
                <div class="footer-cont container">
                    <div class="footer__rights">
                        <p class="footer__text">&copy; 2021 Brand All Rights Reserved.</p>
                    </div>
                    <ul class="footer__icons icons">
                        <li class="icons__item"><a class="icons__link" href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li class="icons__item"><a class="icons__link" href="#"><i class="fab fa-twitter"></i></a></li>
                        <li class="icons__item"><a class="icons__link" href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li class="icons__item"><a class="icons__link" href="#"><i class="fab fa-pinterest-p"></i></a></li>
                        <li class="icons__item"><a class="icons__link" href="#"><i class="fab fa-google-plus-g"></i></a></li>
                    </ul>
                </div>
            </footer>`
});

