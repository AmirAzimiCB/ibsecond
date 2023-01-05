import React from "react";
import "./ProtestComponent.css";

function ProtestComponent() {
  return (
    <div className='protest-container'>
      <div className='protest-header-container'>
        <img
          className='protest-header-img'
          src='/Images/back.jpg'
          alt='header mage'
        />
        <div className='protest-header-text-container'>
          <h1 className='protest-header-text'> Protest Resources </h1>
        </div>
      </div>
      <div className='protest-desc-text-container'>
        <span className='protest-desc-text'>
          In support of our community’s fight for liberation against the racist,
          blood thirsty, and oppressive organizations and institutions, and, in
          support of the progression and sustainment of the black-youth led
          movements - Yung Lords has joined in donating to help set the bail
          funds, as well as bond funds, of those who were arrested on the front
          lines of the national protest. Below are a list of bail and/or bonds
          funds to choose from. We encourage you to join us in donating.
        </span>
        <br />
        <br />
        <span className='protest-desc-text'>
          In addition, at Yung Lords, we know and feel that this is a traumatic
          time for our black men and women across the country. Which is why we
          also created a list of free and/or and monetary accessible mental
          health resources to aid in the healing and aftermath of race based
          trauma. Think of these resources as spaces to recharge, so that we may
          continue to stand at the battle lines. Preserve your mental sanctuary
          so that we may continue the ongoing fight.
        </span>
      </div>
      <div className='protest-lists-container'>
        <div className='protest-list-left'>
          <h1 className='protest-list-header'>
            {" "}
            List of Protest Related Bail Funds
          </h1>
          <ul className='protest-list-items-left'>
            <li className='protest-list-item'>
              <a href='https://minnesotafreedomfund.org/donate'>
                Minnesota Freedom Fund
              </a>
            </li>
            <li className='protest-list-item'>
              <a href='https://actionnetwork.org/fundraising/louisville-community-bail-fund/ '>
                Louisville Community Bail Fund
              </a>
            </li>
            <li className='protest-list-item'>
              <a href='https://www.knowyourrightscamp.com/legal'>
                Funding defense lawyers in the Minneapolis, Minnesota area to
                provide legal resources for those in need.
              </a>
            </li>
            <li className='protest-list-item'>
              <a href='https://brooklynbailfund.org/'>Brooklyn Protest</a>
            </li>
            <li className='protest-list-item'>
              <a href='https://www.phillybailout.com/'>Philadelphia Protest</a>
            </li>
            <li className='protest-list-item'>
              <a href='https://atlsolidarity.org/ '>Atlanta Protest</a>
            </li>
            <li className='protest-list-item'>
              <a href='https://www.gofundme.com/f/peoples-city-council-ticket-fund'>
                Los Angeles
              </a>
            </li>
            <li className='protest-list-item'>
              <a href='https://bailproject.org/ '>The Bail Project</a>
            </li>
            <li className='protest-list-item'>
              <a href=' https://www.communityjusticeexchange.org/nbfn-directory'>
                National Bail Funds
              </a>
            </li>
            <li className='protest-list-item'>
              <a href=' https://www.gofundme.com/f/help-us-raise-funds-to-support-our-community'>
                San Diego
              </a>
            </li>
            <li className='protest-list-item'>
              <a href='https://fundly.com/coloradofreedom'>Colorado</a>
            </li>
          </ul>
        </div>
        <div className='protest-list-right'>
          <h1 className='protest-list-header list-header-right'>
            {" "}
            Free Virtual Mental Health Resource{" "}
          </h1>

          <ul className='protest-list-items-right'>
            <li className='protest-list-item'>
              <a href=' https://borislhensonfoundation.org/covid-19-free-virtual-therapy-support-campaign/'>
                Virtual Therapy Support Campaign
              </a>
            </li>
            <li className='protest-list-item'>
              <a href=' https://blackmenheal.org/services/'>Blank Men Heal</a>
            </li>
            <li className='protest-list-item'>
              <a href='  https://www.beam.community/bvtn'>Beam Community</a>
            </li>
            <li className='protest-list-item'>
              <a href=' https://thenapministry.wordpress.com/'>
                The Nap Ministory
              </a>
            </li>
            <li className='protest-list-item'>
              <a href=' https://www.ayanatherapy.com/'>Ayana Therapy</a>
            </li>
            <li className='protest-list-item'>
              <a href='https://liberatemeditation.com/'>Liberate Meditation</a>
            </li>
            <li className='protest-list-item'>
              <a href='https://www.indiegogo.com/projects/ayana-therapy#/'>
                Ayana Therapy Indiegogo
              </a>
            </li>

            <li className='protest-list-item'>
              <a href='https://www.facebook.com/groups/QTPOCsupport/'>
                QTPOC Support Facebook Group
              </a>
            </li>
            <li className='protest-list-item'>
              <a href='https://www.instagram.com/qtpocmentalhealth/?hl=en'>
                QTPOC Mental Health Instagram
              </a>
            </li>
            <li className='protest-list-item'>
              <a href='https://docs.google.com/document/d/1NSYoEIb_b4Oucuz0TMrwpwmc39uBSO7xnCvrWQvOHg8/edit'>
                Intersectional Mental Health Concerns of LGBTQ & POC Communities
              </a>
            </li>
            <li className='protest-list-item'>
              <a href='https://apps.apple.com/us/app/insight-timer-meditation-timer/id337472899'>
                Insight Timer Meditation Timer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='protest-bottom-text-container'>
        <span className='protest-bottom-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          molestiae tempore velit laudantium quasi excepturi! Molestias natus
          dolorum error rerum placeat dolores architecto facilis? Corporis
          architecto fugiat praesentium nam omnis.
        </span>
      </div>
    </div>
  );
}

export default ProtestComponent;
