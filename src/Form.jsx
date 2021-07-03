import React from 'react';

const Form = () => {
    return (
        <div>
            <section className="first">
                <p className="section-head">Codetrain Registration Form</p>
                <p className="section-para">This form is the first step to register for Codetrain's program starting on 25th July 2020. Our admissions team will reach out to you after successfully submitting your htmlForm. </p>
                <p className="required">* Required</p>
            
            </section>
            <form>
                <section>
                    <label htmlFor="email">Eamil address <span>*</span></label>
                    <input type="text" placeholder="Your email" id="email" />
                </section>

                <section>
                    <label htmlFor="fname">Full Name <span>*</span></label>
                    <input type="text" placeholder="Your answer" id="fname" />
                </section>

                <section>
                    <label htmlFor="pnum">Phone Number <span>*</span></label>
                    <input type="text" placeholder="Your answer" id="pnum " />
                </section>

                <section>
                    <label htmlFor="pnum2">Phone number of next of kin</label>
                    <p className="label-para">Phone number of someone we can reach out to in case your phone is off or not reachable. Eg, your parent, guardian or sibling, or spouse</p>
                    <input type="text" placeholder="Your answer" id="pnum2" />
                </section>

                <section>
                    <label>Can you pay 60% or more of the full Codetrain fees (GHS6000 for Ghanaian applicants or $1,200 htmlFor international applicants) <span>*</span></label>
                    
                    <select name="" id="">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </section>

                <section>
                    <label>Please indicate who is going to pay your fees
                        <span>*</span>
                    </label>    
                    <select name="" id="">
                        <option value="yes">Yourself</option>
                        <option value="parents/sponsor">Parents/Sponsor</option>
                        <option value="organisation">Organisation</option>

                    </select>
                </section>

                <section>
                    <label htmlFor="loc">Location <span>*</span></label>
                    <input type="text" placeholder="Your answer" id="loc" />
                </section>
                
                <section>
                    <label htmlFor="sch">Current or previous school <span>*</span></label>
                    <input type="text" placeholder="Your answer" id="sch" />
                </section>
                
                <section>
                    <label htmlFor="why">Why do you want to join Codetrain <span>*</span></label>
                    <input type="text" placeholder="Your answer" id="why" />
                </section>
                
                <section>
                    <label htmlFor="how">How did you hearabout Codetrain ? <span>*</span></label>
                    <input type="text" placeholder="Your answer" id="how" />
                </section>
                <p className="last">A copy of your responses will be emailed to the address you provided.</p>
                <input type="submit" value="Submit" />
                
            </form>
        </div>
    );
}

export default Form;
