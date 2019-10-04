import React from "react";
import Form from "./Form/Form";
import Grid from "./Grid/Grid";
import "./App.css";

function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <section className="plan">
                    <h1 className="title plan__title">
                        Personalized meal plan
                    </h1>
                    <p className="text plan__text">
                        You can also access your meal plan via email that you
                        received. If not received, please contact{" "}
                        <a
                            href="mailto:supportdc@bodyfitplan.me"
                            className="link"
                        >
                            supportdc@bodyfitplan.me
                        </a>
                    </p>
                    <Form />
                    <Grid />
                    <ul className="download-list">
                        <li className="download-list__item">
                            <p className="text download-list__text">
                                Download exercises
                            </p>
                            <img
                                src="/img/download.svg"
                                alt="download"
                                className="download-list__img"
                            />
                        </li>
                        <li className="download-list__item">
                            <p className="text download-list__text">
                                Download insructions
                            </p>
                            <img
                                src="/img/download.svg"
                                alt="download"
                                className="download-list__img"
                            />
                        </li>
                        <li className="download-list__item">
                            <p className="text download-list__text">
                                Download meal plan
                            </p>
                            <img
                                src="/img/download.svg"
                                alt="download"
                                className="download-list__img"
                            />
                        </li>
                    </ul>
                </section>
                <section className="recommendation">
                    <h2 className="recommendation__title title">
                        Recommendations
                    </h2>
                    <p className="text recommendation__text">
                        This is your meal plan that we customized individually
                        for you. Always consult your doctor following any
                        nutrition or exercise plan. Your personalized meal plan
                        contains dishes based on your choice. Click on a dish to
                        see the recipe. We calculated the food according to your
                        parameters. In order to benefit from a well-balanced
                        diet properly, check our tips below.
                    </p>
                    <div className="recommendation__collection">
                        <div className="recommendation__item">
                            <img
                                src="/img/food.svg"
                                alt="food"
                                className="recommendation__img"
                            />
                            <p className="text recommendation__item-text">
                                Your average portion limit should not exceed:
                            </p>
                            <ul className="recommendation-list">
                                <li className="recommendation-list__item">
                                    Breakfast – 0.55 lb (250 g)
                                </li>
                                <li className="recommendation-list__item">
                                    Lunch – 0.8 lb (350 g)
                                </li>
                                <li className="recommendation-list__item">
                                    Lunch Side Dish – 0.2 lb (100 g)
                                </li>
                                <li className="recommendation-list__item">
                                    Snack – 0.2 lb (100 g)
                                </li>
                                <li className="recommendation-list__item">
                                    Dinner – 0.4 lb (200 g)
                                </li>
                                <li className="recommendation-list__item">
                                    Dinner Side Dish – 0.4 lb (200 g)
                                </li>
                                <li className="recommendation-list__item">
                                    Late Snack – 0.2 lb (100 g)
                                </li>
                            </ul>
                        </div>
                        <div className="recommendation__item">
                            <img
                                src="/img/clock.svg"
                                alt="clock"
                                className="recommendation__img"
                            />
                            <p className="text">
                                You should not feel hunger, but also eating too
                                often may be harmful to the program. That’s why
                                we recommend eating every 2-3 hours. You should
                                abstain from alcohol when following the plan. If
                                you are in a situation you cannot refuse an
                                offer to drink, please limit yourself with a
                                glass of red wine.
                            </p>
                        </div>
                        <div className="recommendation__item">
                            <img
                                src="/img/bag.svg"
                                alt="bag"
                                className="recommendation__img"
                            />
                            <p className="text">
                                Essential products are recommended based on your
                                preferences. Follow the plan for best results.
                                However, you keep the right to substitute your
                                ‘essential ingredients’ with a respective
                                position from other days. ‘Ingredients to your
                                taste’ can be ignored if you dislike.
                            </p>
                        </div>
                        <div className="recommendation__item">
                            <img
                                src="/img/glass.svg"
                                alt="glass"
                                className="recommendation__img"
                            />
                            <p className="text ">
                                We recommend drinking a glass of lemon water
                                just after waking up. This will help boost your
                                metabolism. Do not ignore the recommended daily
                                water amount to be consumed. Note that other
                                beverages such as tea, coffee or juice cannot be
                                counted as water.
                            </p>
                        </div>
                        <div className="recommendation__item">
                            <img
                                src="/img/gym.svg"
                                alt="gym"
                                className="recommendation__img"
                            />
                            <p className="text ">
                                Our key recommendation is physical activity. Any
                                meal program becomes more efficient when
                                combined with fitness, running or at least
                                regular walking. We provide an individual list
                                of home exercises to boost your metabolism.
                                These exercises are essential for weight loss
                                and should be done on a regular basis, at least
                                5 times a week to achieve your goals.
                            </p>
                        </div>
                        <div className="recommendation__item">
                            <img
                                src="/img/sleep.svg"
                                alt="sleep"
                                className="recommendation__img"
                            />
                            <p className="text ">
                                Do not forget to sleep properly. We strongly
                                recommend falling asleep at 11 pm. You should
                                sleep at least 7 hours to recover physically and
                                mentally. This will reduce the stress you feel
                                and infuse power to your body.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;

// old
// http://www.json-generator.com/api/json/get/bUNpDBpCZK?indent=2

// new
// https://next.json-generator.com/NkjW4PJdw
