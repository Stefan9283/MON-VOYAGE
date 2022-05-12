import React, { Component } from "react";
import "../assets/styles/home.scss";

class Home extends Component {
  render() {
    return (
      <>
        <main className="page landing-page">
          <header className="header">

            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 text-left">
                  <h1 className="fw-light">
                    Find the best place to rest while travelling
                  </h1>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <div className="row h-100 align-items-center text-down">
              <div className="col-12 text-left">
                <h1 className="titlu-verde">How it works?</h1>
              </div>
              <div className="row align-items-start">
                <div className="col">
                  <div className="item">
                    <span className="icon">
                      <svg
                        width="19"
                        height="24"
                        viewBox="0 0 19 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_75_2)">
                          <path
                            d="M8.65283 0.0411526C6.6404 0.313231 4.81002 1.33208 3.53694 2.88882C2.26385 4.44557 1.6445 6.42228 1.80585 8.41372C2.27301 13.7143 7.23741 17.6777 8.93173 18.8846C9.09203 19.0047 9.28799 19.0698 9.48952 19.0698C9.69106 19.0698 9.88702 19.0047 10.0473 18.8846C11.8183 17.5132 17.2359 12.9326 17.2359 7.62515C17.2374 6.55442 17.0094 5.49541 16.5667 4.51718C16.124 3.53896 15.4766 2.6635 14.6667 1.94789C13.8568 1.23229 12.9027 0.692619 11.8664 0.364076C10.8302 0.0355342 9.7352 -0.0744992 8.65283 0.0411526ZM9.50347 10.6217C8.8967 10.6217 8.30355 10.4448 7.79904 10.1132C7.29453 9.78172 6.90131 9.3105 6.66911 8.75919C6.43691 8.20788 6.37615 7.60123 6.49453 7.01597C6.6129 6.4307 6.90509 5.89309 7.33414 5.47114C7.76319 5.04918 8.30984 4.76183 8.90495 4.64541C9.50006 4.52899 10.1169 4.58874 10.6775 4.8171C11.2381 5.04546 11.7172 5.43218 12.0543 5.92835C12.3914 6.42451 12.5714 7.00785 12.5714 7.60458C12.5714 8.40478 12.2481 9.1722 11.6728 9.73802C11.0975 10.3038 10.3171 10.6217 9.50347 10.6217Z"
                            fill="#294E55"
                          />
                          <path
                            d="M18.9651 22.2857L17.6961 16.6354C17.6251 16.3233 17.4485 16.0442 17.1952 15.8436C16.9418 15.6431 16.6268 15.533 16.3016 15.5314H15.8972C14.5334 17.2911 12.9392 18.8659 11.1559 20.2149C10.6998 20.5644 10.1409 20.7593 9.56271 20.7704C8.98456 20.7815 8.41829 20.6083 7.9486 20.2766C6.07045 18.9425 4.40239 17.3437 2.99814 15.5314H2.66346C2.33731 15.5334 2.02154 15.6444 1.7681 15.8463C1.51465 16.0482 1.33862 16.3289 1.26897 16.6423L0.0348379 22.2926C-0.011014 22.4978 -0.00951391 22.7105 0.0392278 22.915C0.0879695 23.1196 0.182713 23.3108 0.316491 23.4746C0.45027 23.6384 0.61968 23.7706 0.812263 23.8615C1.00485 23.9525 1.21571 23.9998 1.42933 24H17.5636C17.7782 23.9998 17.9899 23.9522 18.1833 23.861C18.3767 23.7697 18.5469 23.637 18.6813 23.4725C18.8157 23.3081 18.911 23.1162 18.9601 22.9108C19.0092 22.7054 19.0109 22.4918 18.9651 22.2857Z"
                            fill="#294E55"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_75_2">
                            <rect width="19" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <h4 className="titlu-verde">
                      Choose a location from our list
                    </h4>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <span className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3636 21.7846H2C1.71067 21.7846 1.43319 21.9013 1.22861 22.109C1.02402 22.3168 0.909088 22.5985 0.909088 22.8923C0.909088 23.1861 1.02402 23.4678 1.22861 23.6756C1.43319 23.8833 1.71067 24 2 24H22.3636C22.653 24 22.9304 23.8833 23.135 23.6756C23.3396 23.4678 23.4545 23.1861 23.4545 22.8923C23.4545 22.5985 23.3396 22.3168 23.135 22.109C22.9304 21.9013 22.653 21.7846 22.3636 21.7846Z"
                          fill="#294E55"
                        />
                        <path
                          d="M22.5455 0H19.6364C19.2506 0 18.8806 0.155604 18.6078 0.432581C18.3351 0.709558 18.1818 1.08522 18.1818 1.47692C18.1818 1.86863 18.0286 2.24429 17.7558 2.52127C17.483 2.79824 17.113 2.95385 16.7273 2.95385C16.3415 2.95385 15.9715 2.79824 15.6988 2.52127C15.426 2.24429 15.2727 1.86863 15.2727 1.47692C15.2727 1.08522 15.1195 0.709558 14.8467 0.432581C14.5739 0.155604 14.204 0 13.8182 0L10.1818 0C9.79605 0 9.42608 0.155604 9.1533 0.432581C8.88052 0.709558 8.72727 1.08522 8.72727 1.47692C8.72727 1.86863 8.57403 2.24429 8.30125 2.52127C8.02847 2.79824 7.6585 2.95385 7.27273 2.95385C6.88696 2.95385 6.51699 2.79824 6.24421 2.52127C5.97143 2.24429 5.81818 1.86863 5.81818 1.47692C5.81818 1.08522 5.66494 0.709558 5.39216 0.432581C5.11938 0.155604 4.74941 0 4.36364 0L1.45455 0C1.06878 0 0.698807 0.155604 0.426027 0.432581C0.153246 0.709558 0 1.08522 0 1.47692L0 18.4615C0 18.8532 0.153246 19.2289 0.426027 19.5059C0.698807 19.7829 1.06878 19.9385 1.45455 19.9385H22.5455C22.9312 19.9385 23.3012 19.7829 23.574 19.5059C23.8468 19.2289 24 18.8532 24 18.4615V1.47692C24 1.08522 23.8468 0.709558 23.574 0.432581C23.3012 0.155604 22.9312 0 22.5455 0V0ZM5.45455 17.1175C5.16686 17.1175 4.88564 17.0309 4.64644 16.8686C4.40724 16.7063 4.22081 16.4757 4.11072 16.2058C4.00063 15.9359 3.97182 15.639 4.02795 15.3525C4.08407 15.066 4.2226 14.8028 4.42603 14.5963C4.62945 14.3897 4.88862 14.2491 5.17078 14.1921C5.45293 14.1351 5.74539 14.1643 6.01118 14.2761C6.27696 14.3879 6.50413 14.5772 6.66396 14.8201C6.82378 15.063 6.90909 15.3485 6.90909 15.6406C6.90909 16.0323 6.75584 16.408 6.48306 16.685C6.21028 16.9619 5.84031 17.1175 5.45455 17.1175ZM5.45455 12.6868C5.16686 12.6868 4.88564 12.6001 4.64644 12.4379C4.40724 12.2756 4.22081 12.0449 4.11072 11.775C4.00063 11.5052 3.97182 11.2082 4.02795 10.9217C4.08407 10.6352 4.2226 10.3721 4.42603 10.1655C4.62945 9.95895 4.88862 9.81829 5.17078 9.7613C5.45293 9.70431 5.74539 9.73356 6.01118 9.84535C6.27696 9.95713 6.50413 10.1464 6.66396 10.3893C6.82378 10.6322 6.90909 10.9177 6.90909 11.2098C6.90909 11.6016 6.75584 11.9772 6.48306 12.2542C6.21028 12.5312 5.84031 12.6868 5.45455 12.6868ZM9.81818 17.1175C9.5305 17.1175 9.24928 17.0309 9.01008 16.8686C8.77088 16.7063 8.58445 16.4757 8.47436 16.2058C8.36427 15.9359 8.33546 15.639 8.39159 15.3525C8.44771 15.066 8.58624 14.8028 8.78966 14.5963C8.99308 14.3897 9.25226 14.2491 9.53441 14.1921C9.81657 14.1351 10.109 14.1643 10.3748 14.2761C10.6406 14.3879 10.8678 14.5772 11.0276 14.8201C11.1874 15.063 11.2727 15.3485 11.2727 15.6406C11.2727 16.0323 11.1195 16.408 10.8467 16.685C10.5739 16.9619 10.204 17.1175 9.81818 17.1175ZM9.81818 12.6868C9.5305 12.6868 9.24928 12.6001 9.01008 12.4379C8.77088 12.2756 8.58445 12.0449 8.47436 11.775C8.36427 11.5052 8.33546 11.2082 8.39159 10.9217C8.44771 10.6352 8.58624 10.3721 8.78966 10.1655C8.99308 9.95895 9.25226 9.81829 9.53441 9.7613C9.81657 9.70431 10.109 9.73356 10.3748 9.84535C10.6406 9.95713 10.8678 10.1464 11.0276 10.3893C11.1874 10.6322 11.2727 10.9177 11.2727 11.2098C11.2727 11.6016 11.1195 11.9772 10.8467 12.2542C10.5739 12.5312 10.204 12.6868 9.81818 12.6868ZM9.81818 8.256C9.5305 8.256 9.24928 8.16938 9.01008 8.00709C8.77088 7.84481 8.58445 7.61414 8.47436 7.34427C8.36427 7.0744 8.33546 6.77744 8.39159 6.49094C8.44771 6.20445 8.58624 5.94129 8.78966 5.73474C8.99308 5.52818 9.25226 5.38752 9.53441 5.33053C9.81657 5.27355 10.109 5.30279 10.3748 5.41458C10.6406 5.52636 10.8678 5.71566 11.0276 5.95854C11.1874 6.20142 11.2727 6.48697 11.2727 6.77908C11.2727 7.17078 11.1195 7.54644 10.8467 7.82342C10.5739 8.1004 10.204 8.256 9.81818 8.256ZM14.1818 17.1175C13.8941 17.1175 13.6129 17.0309 13.3737 16.8686C13.1345 16.7063 12.9481 16.4757 12.838 16.2058C12.7279 15.9359 12.6991 15.639 12.7552 15.3525C12.8113 15.066 12.9499 14.8028 13.1533 14.5963C13.3567 14.3897 13.6159 14.2491 13.8981 14.1921C14.1802 14.1351 14.4727 14.1643 14.7384 14.2761C15.0042 14.3879 15.2314 14.5772 15.3912 14.8201C15.5511 15.063 15.6364 15.3485 15.6364 15.6406C15.6364 16.0323 15.4831 16.408 15.2103 16.685C14.9376 16.9619 14.5676 17.1175 14.1818 17.1175ZM14.1818 12.6868C13.8941 12.6868 13.6129 12.6001 13.3737 12.4379C13.1345 12.2756 12.9481 12.0449 12.838 11.775C12.7279 11.5052 12.6991 11.2082 12.7552 10.9217C12.8113 10.6352 12.9499 10.3721 13.1533 10.1655C13.3567 9.95895 13.6159 9.81829 13.8981 9.7613C14.1802 9.70431 14.4727 9.73356 14.7384 9.84535C15.0042 9.95713 15.2314 10.1464 15.3912 10.3893C15.5511 10.6322 15.6364 10.9177 15.6364 11.2098C15.6364 11.6016 15.4831 11.9772 15.2103 12.2542C14.9376 12.5312 14.5676 12.6868 14.1818 12.6868ZM14.1818 8.256C13.8941 8.256 13.6129 8.16938 13.3737 8.00709C13.1345 7.84481 12.9481 7.61414 12.838 7.34427C12.7279 7.0744 12.6991 6.77744 12.7552 6.49094C12.8113 6.20445 12.9499 5.94129 13.1533 5.73474C13.3567 5.52818 13.6159 5.38752 13.8981 5.33053C14.1802 5.27355 14.4727 5.30279 14.7384 5.41458C15.0042 5.52636 15.2314 5.71566 15.3912 5.95854C15.5511 6.20142 15.6364 6.48697 15.6364 6.77908C15.6364 7.17078 15.4831 7.54644 15.2103 7.82342C14.9376 8.1004 14.5676 8.256 14.1818 8.256ZM18.5455 12.6868C18.2578 12.6868 17.9766 12.6001 17.7374 12.4379C17.4982 12.2756 17.3117 12.0449 17.2016 11.775C17.0915 11.5052 17.0627 11.2082 17.1189 10.9217C17.175 10.6352 17.3135 10.3721 17.5169 10.1655C17.7204 9.95895 17.9795 9.81829 18.2617 9.7613C18.5438 9.70431 18.8363 9.73356 19.1021 9.84535C19.3679 9.95713 19.595 10.1464 19.7549 10.3893C19.9147 10.6322 20 10.9177 20 11.2098C20 11.6016 19.8468 11.9772 19.574 12.2542C19.3012 12.5312 18.9312 12.6868 18.5455 12.6868ZM18.5455 8.256C18.2578 8.256 17.9766 8.16938 17.7374 8.00709C17.4982 7.84481 17.3117 7.61414 17.2016 7.34427C17.0915 7.0744 17.0627 6.77744 17.1189 6.49094C17.175 6.20445 17.3135 5.94129 17.5169 5.73474C17.7204 5.52818 17.9795 5.38752 18.2617 5.33053C18.5438 5.27355 18.8363 5.30279 19.1021 5.41458C19.3679 5.52636 19.595 5.71566 19.7549 5.95854C19.9147 6.20142 20 6.48697 20 6.77908C20 7.17078 19.8468 7.54644 19.574 7.82342C19.3012 8.1004 18.9312 8.256 18.5455 8.256Z"
                          fill="#294E55"
                        />
                      </svg>
                    </span>

                    <h4 className="titlu-verde">
                      Check availability for your desired date
                    </h4>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <span className="icon">
                      <svg
                        width="27"
                        height="24"
                        viewBox="0 0 27 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.6882 12.6078C19.6882 12.3934 19.6038 12.1878 19.4538 12.0363C19.3037 11.8847 19.1001 11.7996 18.8878 11.7996H11.2046C10.9924 11.7996 10.7888 11.8847 10.6387 12.0363C10.4886 12.1878 10.4043 12.3934 10.4043 12.6078C10.4043 12.8221 10.4886 13.0277 10.6387 13.1792C10.7888 13.3308 10.9924 13.4159 11.2046 13.4159H18.8878C19.1001 13.4159 19.3037 13.3308 19.4538 13.1792C19.6038 13.0277 19.6882 12.8221 19.6882 12.6078ZM3.20133 18.75C3.03152 18.75 2.86867 18.6819 2.74859 18.5606C2.62852 18.4394 2.56106 18.2749 2.56106 18.1034V7.11207C2.56106 6.94059 2.62852 6.77614 2.74859 6.65489C2.86867 6.53364 3.03152 6.46552 3.20133 6.46552H19.8482C20.018 6.46552 20.1809 6.53364 20.301 6.65489C20.421 6.77614 20.4885 6.94059 20.4885 7.11207V13.2026L23.0496 10.6164V2.58621C23.0496 1.9003 22.7797 1.24249 22.2994 0.757482C21.8192 0.272475 21.1677 0 20.4885 0L2.56106 0C1.88183 0 1.23041 0.272475 0.750118 0.757482C0.269826 1.24249 0 1.9003 0 2.58621L0 18.75C0 19.4359 0.269826 20.0937 0.750118 20.5787C1.23041 21.0637 1.88183 21.3362 2.56106 21.3362H13.0102C13.0613 20.9147 13.248 20.5217 13.5416 20.2177L14.4188 19.3319L14.995 18.75H3.20133ZM7.68319 2.26293H10.2443C10.499 2.26293 10.7432 2.36511 10.9234 2.54699C11.1035 2.72886 11.2046 2.97554 11.2046 3.23276C11.2046 3.48997 11.1035 3.73665 10.9234 3.91853C10.7432 4.10041 10.499 4.20259 10.2443 4.20259H7.68319C7.42847 4.20259 7.18419 4.10041 7.00408 3.91853C6.82397 3.73665 6.72279 3.48997 6.72279 3.23276C6.72279 2.97554 6.82397 2.72886 7.00408 2.54699C7.18419 2.36511 7.42847 2.26293 7.68319 2.26293ZM3.84159 1.93966C4.09486 1.93966 4.34244 2.01549 4.55302 2.15758C4.7636 2.29967 4.92773 2.50163 5.02465 2.73791C5.12157 2.97419 5.14693 3.23419 5.09752 3.48503C5.04811 3.73587 4.92615 3.96628 4.74707 4.14712C4.56798 4.32796 4.33981 4.45112 4.09141 4.50102C3.84301 4.55091 3.58554 4.5253 3.35156 4.42743C3.11757 4.32956 2.91758 4.16382 2.77687 3.95117C2.63616 3.73852 2.56106 3.48851 2.56106 3.23276C2.56106 2.88981 2.69598 2.5609 2.93612 2.3184C3.17627 2.07589 3.50198 1.93966 3.84159 1.93966ZM24.3749 15.7371L22.5374 13.8815C22.5076 13.8512 22.4722 13.8271 22.4332 13.8107C22.3942 13.7943 22.3523 13.7858 22.3101 13.7858C22.2678 13.7858 22.226 13.7943 22.1869 13.8107C22.1479 13.8271 22.1125 13.8512 22.0828 13.8815L16.9606 19.0539C16.9306 19.0839 16.9068 19.1197 16.8906 19.1591C16.8743 19.1985 16.8659 19.2407 16.8659 19.2834C16.8659 19.3261 16.8743 19.3683 16.8906 19.4077C16.9068 19.4471 16.9306 19.4829 16.9606 19.5129L18.7918 21.3685C18.8527 21.4282 18.9342 21.4615 19.0191 21.4615C19.1039 21.4615 19.1855 21.4282 19.2464 21.3685L24.3685 16.1961C24.3989 16.1665 24.4233 16.1311 24.4401 16.0919C24.4569 16.0528 24.4658 16.0106 24.4664 15.9679C24.467 15.9253 24.4592 15.8829 24.4435 15.8433C24.4278 15.8036 24.4045 15.7675 24.3749 15.7371ZM15.7761 20.6897C15.7469 20.6595 15.7121 20.6356 15.6736 20.6193C15.6351 20.603 15.5938 20.5946 15.5521 20.5946C15.5103 20.5946 15.469 20.603 15.4305 20.6193C15.392 20.6356 15.3572 20.6595 15.328 20.6897L14.6877 21.3362C14.6364 21.391 14.6048 21.4616 14.5981 21.5366L14.438 23.6315C14.435 23.6792 14.4423 23.7271 14.4594 23.7717C14.4765 23.8163 14.5031 23.8567 14.5372 23.8899C14.5713 23.9231 14.6122 23.9484 14.657 23.9641C14.7018 23.9798 14.7494 23.9854 14.7965 23.9806L16.7878 23.7478C16.86 23.7357 16.9269 23.7019 16.9798 23.6509L17.6201 23.0043C17.6501 22.9743 17.6739 22.9385 17.6902 22.8991C17.7064 22.8597 17.7148 22.8175 17.7148 22.7748C17.7148 22.7321 17.7064 22.6899 17.6902 22.6505C17.6739 22.6111 17.6501 22.5753 17.6201 22.5453L15.7761 20.6897ZM4.80199 15.0323C4.58973 15.0323 4.38616 15.1175 4.23607 15.269C4.08598 15.4206 4.00166 15.6262 4.00166 15.8405C4.00166 16.0549 4.08598 16.2604 4.23607 16.412C4.38616 16.5636 4.58973 16.6487 4.80199 16.6487H16.3268C16.539 16.6487 16.7426 16.5636 16.8927 16.412C17.0428 16.2604 17.1271 16.0549 17.1271 15.8405C17.1271 15.6262 17.0428 15.4206 16.8927 15.269C16.7426 15.1175 16.539 15.0323 16.3268 15.0323H4.80199ZM18.8878 8.56681H11.2046C10.9924 8.56681 10.7888 8.65196 10.6387 8.80352C10.4886 8.95509 10.4043 9.16066 10.4043 9.375C10.4043 9.58934 10.4886 9.79491 10.6387 9.94648C10.7888 10.098 10.9924 10.1832 11.2046 10.1832H18.8878C19.1001 10.1832 19.3037 10.098 19.4538 9.94648C19.6038 9.79491 19.6882 9.58934 19.6882 9.375C19.6882 9.16066 19.6038 8.95509 19.4538 8.80352C19.3037 8.65196 19.1001 8.56681 18.8878 8.56681Z"
                          fill="#294E55"
                        />
                        <path
                          d="M7.68319 8.40518H5.12212C4.95232 8.40518 4.78946 8.4733 4.66939 8.59455C4.54932 8.7158 4.48186 8.88026 4.48186 9.05173V12.2845C4.48186 12.456 4.54932 12.6204 4.66939 12.7417C4.78946 12.8629 4.95232 12.931 5.12212 12.931H7.68319C7.853 12.931 8.01585 12.8629 8.13592 12.7417C8.256 12.6204 8.32345 12.456 8.32345 12.2845V9.05173C8.32345 8.88026 8.256 8.7158 8.13592 8.59455C8.01585 8.4733 7.853 8.40518 7.68319 8.40518ZM26.8912 13.1767L25.0536 11.3276C25.0238 11.2973 24.9884 11.2732 24.9494 11.2568C24.9104 11.2404 24.8686 11.232 24.8263 11.232C24.784 11.232 24.7422 11.2404 24.7032 11.2568C24.6642 11.2732 24.6288 11.2973 24.599 11.3276L23.6514 12.2845C23.6214 12.3145 23.5976 12.3503 23.5813 12.3897C23.5651 12.4291 23.5567 12.4713 23.5567 12.514C23.5567 12.5567 23.5651 12.5989 23.5813 12.6383C23.5976 12.6777 23.6214 12.7135 23.6514 12.7435L25.489 14.5991C25.5488 14.6584 25.6293 14.6916 25.7131 14.6916C25.7969 14.6916 25.8773 14.6584 25.9372 14.5991L26.8912 13.6358C26.9502 13.5743 26.9832 13.4919 26.9832 13.4063C26.9832 13.3206 26.9502 13.2383 26.8912 13.1767Z"
                          fill="#294E55"
                        />
                      </svg>
                    </span>

                    <h4 className="titlu-verde">
                      Fill the form or login to your existing account to book
                      your stay
                    </h4>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <span className="icon">
                      <svg
                        width="25"
                        height="22"
                        viewBox="0 0 25 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_76_5)">
                          <path
                            d="M3.75 8.36383V7.25485C3.75056 6.97729 3.84511 6.70796 4.01851 6.49002C4.1919 6.27208 4.43409 6.11816 4.70625 6.05294C6.53348 5.54484 8.46651 5.54484 10.2937 6.05294C10.5659 6.11816 10.8081 6.27208 10.9815 6.49002C11.1549 6.70796 11.2494 6.97729 11.25 7.25485V8.36383H13.125V7.26105C13.1167 6.978 13.2064 6.70066 13.3793 6.47521C13.5521 6.24976 13.7977 6.0898 14.075 6.02196C15.9031 5.52016 17.8344 5.52016 19.6625 6.02196C19.9398 6.0898 20.1854 6.24976 20.3582 6.47521C20.5311 6.70066 20.6208 6.978 20.6125 7.26105V8.36383H22.4875V0.619537C22.4875 0.455224 22.4217 0.29764 22.3044 0.181453C22.1872 0.0652662 22.0283 -7.00401e-06 21.8625 -7.00401e-06H20.4625C20.2967 -7.00401e-06 20.1378 0.0652662 20.0206 0.181453C19.9033 0.29764 19.8375 0.455224 19.8375 0.619537V1.30723C17.3961 0.38758 14.7986 -0.0562846 12.1875 -7.00401e-06C9.5764 -0.0562846 6.97888 0.38758 4.5375 1.30723V0.619537C4.5375 0.455224 4.47165 0.29764 4.35444 0.181453C4.23723 0.0652662 4.07826 -7.00401e-06 3.9125 -7.00401e-06H2.5C2.33424 -7.00401e-06 2.17527 0.0652662 2.05806 0.181453C1.94085 0.29764 1.875 0.455224 1.875 0.619537V8.43198C2.08039 8.3879 2.28985 8.36506 2.5 8.36383H3.75ZM24.6875 15.7984H0.3125C0.22962 15.7984 0.150134 15.831 0.0915291 15.8891C0.032924 15.9472 0 16.026 0 16.1081L0 18.5863C0 18.6685 0.032924 18.7473 0.0915291 18.8053C0.150134 18.8634 0.22962 18.8961 0.3125 18.8961H1.875V21.3743C1.875 21.5386 1.94085 21.6961 2.05806 21.8123C2.17527 21.9285 2.33424 21.9938 2.5 21.9938H3.75C3.91576 21.9938 4.07473 21.9285 4.19194 21.8123C4.30915 21.6961 4.375 21.5386 4.375 21.3743V18.8961H20.625V21.3743C20.625 21.5386 20.6908 21.6961 20.8081 21.8123C20.9253 21.9285 21.0842 21.9938 21.25 21.9938H22.5C22.6658 21.9938 22.8247 21.9285 22.9419 21.8123C23.0592 21.6961 23.125 21.5386 23.125 21.3743V18.8961H24.6875C24.7704 18.8961 24.8499 18.8634 24.9085 18.8053C24.9671 18.7473 25 18.6685 25 18.5863V16.1081C24.9984 16.0271 24.9647 15.9498 24.9063 15.8931C24.8479 15.8363 24.7693 15.8045 24.6875 15.8046V15.7984Z"
                            fill="#294E55"
                          />
                          <path
                            d="M22.5 9.91269H2.5C1.81909 9.97988 1.18724 10.2941 0.725803 10.7949C0.264365 11.2958 0.00588115 11.948 0 12.6263L0 13.9769C0.00238507 14.0152 0.0123699 14.0526 0.0293815 14.087C0.0463931 14.1214 0.0700965 14.1522 0.0991315 14.1775C0.128166 14.2029 0.161961 14.2223 0.198577 14.2346C0.235192 14.247 0.273907 14.252 0.3125 14.2495H24.6875C24.7261 14.252 24.7648 14.247 24.8014 14.2346C24.838 14.2223 24.8718 14.2029 24.9009 14.1775C24.9299 14.1522 24.9536 14.1214 24.9706 14.087C24.9876 14.0526 24.9976 14.0152 25 13.9769V12.6263C24.9941 11.948 24.7356 11.2958 24.2742 10.7949C23.8128 10.2941 23.1809 9.97988 22.5 9.91269Z"
                            fill="#294E55"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_76_5">
                            <rect width="25" height="22" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <h4 className="titlu-verde">
                      Reach the place and have the coziest experience
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default Home;
