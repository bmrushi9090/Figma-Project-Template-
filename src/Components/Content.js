import React from 'react'

const Content = () => {
    return (
        <>
            <h1 className='hnav'>Relation and function (Mathematics)</h1>
            <div className='cnav'>
                <span>Study</span>
                <span>Quiz</span>
                <span>Test</span>
                <span>Game</span>
                <span>Others</span>
            </div>

                <div className='volume'>Volume Icon</div>
                <div className='idea'>Idea Icon</div>
            <div className="demo1">
                <div className='demo'>
                    {/* <div className="cont"> */}
                    <h2 className='hcont'>9+6+7x-2x-3</h2>
                    {/* </div> */}
                </div>
            </div>

            <div className="play">
                <h6 className='cl'>Refresh Icon</h6>
                <h6 className='cl'>Prev Icon</h6>
                <h6 className='cl'>01/10</h6>
                <h6 className='cl'>Next Icon</h6>
                <h6 className='cl'>Full Screen</h6>
            </div>

            <p className='atag'>Publish by</p>

            <div className="footer">
                <h1 className='cl'>Hygge<b>X</b></h1>
                <h1 className='cl'>Create Flashcard</h1>
            </div>

            <div className="name">
                <h1 className='cl'>FAQ</h1>
            </div>

            <div className="box">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item ">
                        <h2 class="accordion-header ">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Can education flashcards be used for all age groups?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mbox">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How do education flashcards work?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mbox">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Can education flashcards be used for test preparation?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content