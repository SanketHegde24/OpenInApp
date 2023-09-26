import React from "react";
import Profile from "./Profile.jsx";
import Barchart from "./barchart";
import Doughnutchart from "./doughnut";
import { Box } from "@mui/material";

function Body() {

    return (
        <div className="body">
            <div className="row row-1">
                <div className="card">
                    <circle className="circle" style={{background:'#7FCD93'}}>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.75422 8.76686C9.25088 8.76686 8.75883 8.91856 8.34031 9.20277C7.9218 9.48699 7.5956 9.89095 7.40298 10.3636C7.21036 10.8362 7.15996 11.3563 7.25816 11.858C7.35635 12.3598 7.59874 12.8206 7.95466 13.1824C8.31058 13.5441 8.76405 13.7905 9.25773 13.8903C9.7514 13.9901 10.2631 13.9388 10.7281 13.7431C11.1932 13.5473 11.5906 13.2158 11.8703 12.7904C12.1499 12.3651 12.2992 11.865 12.2992 11.3534C12.2992 10.6674 12.0311 10.0095 11.5538 9.52444C11.0765 9.03937 10.4292 8.76686 9.75422 8.76686ZM9.75422 12.2156C9.58644 12.2156 9.42243 12.165 9.28292 12.0703C9.14342 11.9756 9.03468 11.8409 8.97048 11.6834C8.90627 11.5258 8.88947 11.3525 8.9222 11.1852C8.95493 11.018 9.03573 10.8643 9.15437 10.7438C9.27301 10.6232 9.42417 10.5411 9.58873 10.5078C9.75328 10.4745 9.92385 10.4916 10.0789 10.5569C10.2339 10.6221 10.3664 10.7326 10.4596 10.8744C10.5528 11.0162 10.6025 11.1829 10.6025 11.3534C10.6025 11.5821 10.5132 11.8014 10.3541 11.9631C10.195 12.1248 9.97921 12.2156 9.75422 12.2156ZM9.15191 6.79246C9.23259 6.87095 9.32773 6.93248 9.43186 6.97352C9.53341 7.01913 9.6432 7.04269 9.75422 7.04269C9.86524 7.04269 9.97504 7.01913 10.0766 6.97352C10.1807 6.93248 10.2759 6.87095 10.3565 6.79246L12.2992 4.85255C12.4634 4.68562 12.5557 4.45922 12.5557 4.22315C12.5557 3.98708 12.4634 3.76068 12.2992 3.59376C12.135 3.42683 11.9122 3.33305 11.6799 3.33305C11.4476 3.33305 11.2249 3.42683 11.0606 3.59376L10.6025 4.10244V1.0072C10.6025 0.778538 10.5132 0.559238 10.3541 0.397547C10.195 0.235856 9.97921 0.14502 9.75422 0.14502C9.52923 0.14502 9.31346 0.235856 9.15437 0.397547C8.99528 0.559238 8.9059 0.778538 8.9059 1.0072V4.10244L8.44781 3.59376C8.28356 3.42683 8.0608 3.33305 7.82853 3.33305C7.59626 3.33305 7.3735 3.42683 7.20925 3.59376C7.04501 3.76068 6.95274 3.98708 6.95274 4.22315C6.95274 4.45922 7.04501 4.68562 7.20925 4.85255L9.15191 6.79246ZM15.6925 11.3534C15.6925 11.1829 15.6427 11.0162 15.5495 10.8744C15.4563 10.7326 15.3238 10.6221 15.1688 10.5569C15.0138 10.4916 14.8432 10.4745 14.6787 10.5078C14.5141 10.5411 14.3629 10.6232 14.2443 10.7438C14.1257 10.8643 14.0449 11.018 14.0121 11.1852C13.9794 11.3525 13.9962 11.5258 14.0604 11.6834C14.1246 11.8409 14.2334 11.9756 14.3729 12.0703C14.5124 12.165 14.6764 12.2156 14.8442 12.2156C15.0692 12.2156 15.2849 12.1248 15.444 11.9631C15.6031 11.8014 15.6925 11.5821 15.6925 11.3534ZM16.5408 5.31812H13.9958C13.7709 5.31812 13.5551 5.40896 13.396 5.57065C13.2369 5.73234 13.1475 5.95164 13.1475 6.18031C13.1475 6.40897 13.2369 6.62827 13.396 6.78996C13.5551 6.95166 13.7709 7.04249 13.9958 7.04249H16.5408C16.7658 7.04249 16.9816 7.13333 17.1407 7.29502C17.2998 7.45671 17.3891 7.67601 17.3891 7.90468V14.8022C17.3891 15.0308 17.2998 15.2501 17.1407 15.4118C16.9816 15.5735 16.7658 15.6643 16.5408 15.6643H2.96764C2.74265 15.6643 2.52687 15.5735 2.36778 15.4118C2.20869 15.2501 2.11932 15.0308 2.11932 14.8022V7.90468C2.11932 7.67601 2.20869 7.45671 2.36778 7.29502C2.52687 7.13333 2.74265 7.04249 2.96764 7.04249H5.51261C5.7376 7.04249 5.95337 6.95166 6.11246 6.78996C6.27155 6.62827 6.36093 6.40897 6.36093 6.18031C6.36093 5.95164 6.27155 5.73234 6.11246 5.57065C5.95337 5.40896 5.7376 5.31812 5.51261 5.31812H2.96764C2.29267 5.31812 1.64535 5.59064 1.16807 6.07571C0.690798 6.56078 0.422668 7.21868 0.422668 7.90468V14.8022C0.422668 15.4881 0.690798 16.146 1.16807 16.6311C1.64535 17.1162 2.29267 17.3887 2.96764 17.3887H16.5408C17.2158 17.3887 17.8631 17.1162 18.3404 16.6311C18.8177 16.146 19.0858 15.4881 19.0858 14.8022V7.90468C19.0858 7.21868 18.8177 6.56078 18.3404 6.07571C17.8631 5.59064 17.2158 5.31812 16.5408 5.31812ZM3.81596 11.3534C3.81596 11.5239 3.86572 11.6906 3.95893 11.8324C4.05214 11.9742 4.18463 12.0847 4.33965 12.15C4.49466 12.2152 4.66523 12.2323 4.82978 12.199C4.99434 12.1658 5.1455 12.0836 5.26414 11.9631C5.38278 11.8425 5.46358 11.6889 5.49631 11.5216C5.52904 11.3544 5.51224 11.181 5.44803 11.0235C5.38383 10.8659 5.27509 10.7313 5.13559 10.6365C4.99608 10.5418 4.83207 10.4912 4.66428 10.4912C4.4393 10.4912 4.22352 10.5821 4.06443 10.7438C3.90534 10.9054 3.81596 11.1247 3.81596 11.3534Z" fill="white"/>
                        </svg>
                    </circle>
                    <p>Total Revenue</p>
                    <div className="price">
                        <p>$2,129,430</p>
                        <div className="capsule">+2.5%</div>
                    </div>
                </div>
                <div className="card">
                    <circle className="circle" style={{background:'#DEBF85'}}>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.8716 4.61894C4.04968 4.79554 4.29033 4.89462 4.54113 4.89462C4.79194 4.89462 5.03259 4.79554 5.21067 4.61894C5.29837 4.53202 5.36798 4.42859 5.41548 4.31462C5.46299 4.20065 5.48745 4.0784 5.48745 3.95493C5.48745 3.83145 5.46299 3.7092 5.41548 3.59523C5.36798 3.48127 5.29837 3.37784 5.21067 3.29092C5.03259 3.11432 4.79194 3.01523 4.54113 3.01523C4.29033 3.01523 4.04968 3.11432 3.8716 3.29092C3.50304 3.65824 3.50304 4.25284 3.8716 4.61894ZM14.7083 10.1472C14.9379 9.91971 15.1202 9.64894 15.2446 9.35057C15.369 9.05221 15.433 8.73215 15.433 8.40889C15.433 8.08563 15.369 7.76558 15.2446 7.46721C15.1202 7.16884 14.9379 6.89808 14.7083 6.67055L8.86058 0.859695C8.39809 0.400847 7.77372 0.142272 7.12223 0.139787L3.11238 0.122588C2.78631 0.120311 2.46304 0.182732 2.16126 0.306237C1.85948 0.429742 1.5852 0.611878 1.35429 0.842102C1.12338 1.07233 0.940434 1.34606 0.816033 1.64747C0.691631 1.94888 0.628248 2.27197 0.629556 2.59804L0.65904 6.7418C0.664354 7.38827 0.924874 8.00645 1.38386 8.46172L7.14558 14.1866C7.61073 14.6474 8.239 14.9059 8.89375 14.9059C9.54849 14.9059 10.1768 14.6474 10.6419 14.1866L14.7083 10.1472ZM13.8336 7.53911C13.9484 7.65287 14.0395 7.78825 14.1017 7.93744C14.1639 8.08662 14.1959 8.24665 14.1959 8.40828C14.1959 8.56991 14.1639 8.72993 14.1017 8.87912C14.0395 9.0283 13.9484 9.16368 13.8336 9.27745L9.76722 13.3192C9.28441 13.7984 8.50185 13.7984 8.01905 13.3192L2.25733 7.59316C2.02823 7.36536 1.89842 7.05627 1.89615 6.7332L1.86544 2.58944C1.86462 2.42628 1.89621 2.26458 1.95839 2.11373C2.02056 1.96287 2.11208 1.82587 2.22762 1.71067C2.34317 1.59547 2.48044 1.50436 2.63148 1.44263C2.78251 1.38091 2.9443 1.3498 3.10746 1.3511L7.11732 1.3683C7.44327 1.36938 7.75571 1.49868 7.98711 1.72825L13.8348 7.53911H13.8336ZM15.3692 10.8721C15.5343 11.3137 15.5687 11.7935 15.4685 12.2543C15.3683 12.715 15.1377 13.1371 14.8041 13.4704L12.3913 15.8832C11.935 16.3395 11.3933 16.7015 10.7971 16.9484C10.2008 17.1954 9.56182 17.3225 8.91647 17.3225C8.27113 17.3225 7.63211 17.1954 7.03589 16.9484C6.43968 16.7015 5.89795 16.3395 5.44163 15.8832L1.16396 11.6055C0.818274 11.2602 0.623843 10.7918 0.623413 10.3033V9.34502L5.44163 14.1632C5.5264 14.248 5.61362 14.3291 5.70208 14.4053L6.31019 15.0146C6.65243 15.3569 7.05875 15.6284 7.50594 15.8137C7.95313 15.9989 8.43243 16.0943 8.91647 16.0943C9.40052 16.0943 9.87982 15.9989 10.327 15.8137C10.7742 15.6284 11.1805 15.3569 11.5228 15.0146L12.1358 14.4016C12.2237 14.3251 12.3089 14.2456 12.3913 14.1632L14.8041 11.7504C15.0535 11.5017 15.2462 11.2021 15.3692 10.8721Z" fill="white"/>
                        </svg>
                    </circle>
                    <p>Total Transactions</p>
                    <div className="price">
                        <p>1,520</p>
                        <div className="capsule">+2.5%</div>
                    </div>
                </div>
                <div className="card">
                    <circle className="circle" style={{background:'#ECA4A4'}}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9271 9.24009C17.2736 8.78214 17.4655 8.22104 17.4655 7.63725C17.4655 6.71103 16.9477 5.83432 16.1143 5.34542C15.8998 5.21958 15.6555 5.15335 15.4068 5.15358H10.46L10.5838 2.61833C10.6127 2.00566 10.3961 1.42393 9.97526 0.980421C9.76874 0.761816 9.51958 0.587887 9.24318 0.46938C8.96679 0.350874 8.66902 0.290309 8.3683 0.291428C7.29561 0.291428 6.3467 1.01343 6.06202 2.04692L4.29003 8.46239H1.62276C1.25763 8.46239 0.962646 8.75738 0.962646 9.12251V16.6313C0.962646 16.9964 1.25763 17.2914 1.62276 17.2914H14.0267C14.2165 17.2914 14.4021 17.2543 14.5734 17.18C15.5553 16.7613 16.1886 15.802 16.1886 14.7376C16.1886 14.4777 16.1514 14.2219 16.0772 13.9743C16.4237 13.5164 16.6156 12.9553 16.6156 12.3715C16.6156 12.1116 16.5785 11.8558 16.5042 11.6082C16.8508 11.1503 17.0426 10.5892 17.0426 10.0054C17.0385 9.74549 17.0013 9.48763 16.9271 9.24009ZM2.4479 15.8062V9.94765H4.11881V15.8062H2.4479ZM15.5759 8.52428L15.1241 8.91622L15.4109 9.44019C15.5053 9.61279 15.5543 9.80659 15.5532 10.0033C15.5532 10.3437 15.4047 10.6676 15.1489 10.8904L14.6971 11.2823L14.9839 11.8063C15.0783 11.9789 15.1273 12.1727 15.1262 12.3694C15.1262 12.7098 14.9777 13.0337 14.7219 13.2565L14.2701 13.6484L14.5569 14.1724C14.6513 14.345 14.7003 14.5388 14.6992 14.7355C14.6992 15.1976 14.4269 15.6143 14.0061 15.8041H5.43904V9.88164L7.49158 2.44505C7.54451 2.25444 7.65812 2.08628 7.81521 1.96605C7.9723 1.84581 8.16429 1.78006 8.36211 1.77875C8.51888 1.77875 8.6736 1.82413 8.79737 1.91696C9.00159 2.06961 9.11092 2.30065 9.09855 2.54613L8.90051 6.63883H15.3861C15.7533 6.86368 15.9802 7.24325 15.9802 7.63725C15.9802 7.97762 15.8317 8.29943 15.5759 8.52428Z" fill="white"/>
                        </svg>
                    </circle>
                    <p>Total Likes</p>
                    <div className="price">
                        <p>9,721</p>
                        <div className="capsule">+2.5%</div>
                    </div>
                </div>
                <div className="card">
                    <circle className="circle" style={{background:'#A9B0E5'}}>
                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2074 9.33443C11.1047 8.73839 11.7863 7.86931 12.1512 6.8558C12.5162 5.84229 12.5452 4.7382 12.2339 3.70694C11.9226 2.67568 11.2875 1.77204 10.4227 1.12975C9.55794 0.487462 8.50934 0.140656 7.43212 0.140656C6.3549 0.140656 5.30629 0.487462 4.4415 1.12975C3.5767 1.77204 2.94166 2.67568 2.63036 3.70694C2.31906 4.7382 2.34804 5.84229 2.71301 6.8558C3.07798 7.86931 3.75955 8.73839 4.65686 9.33443C3.12725 9.89867 1.80523 10.9144 0.866027 12.2471C0.814788 12.3189 0.778252 12.4001 0.758524 12.486C0.738796 12.572 0.736264 12.661 0.751075 12.7479C0.765886 12.8349 0.797746 12.918 0.844823 12.9926C0.891899 13.0672 0.953262 13.1317 1.02538 13.1825C1.09749 13.2332 1.17894 13.2693 1.26502 13.2884C1.35111 13.3076 1.44014 13.3095 1.52698 13.2941C1.61382 13.2788 1.69676 13.2464 1.77103 13.1988C1.84529 13.1512 1.90942 13.0894 1.95971 13.017C2.57691 12.139 3.39631 11.4224 4.34873 10.9277C5.30115 10.4329 6.35862 10.1747 7.43186 10.1746C8.5051 10.1746 9.56259 10.4328 10.515 10.9275C11.4675 11.4221 12.2869 12.1387 12.9042 13.0167C12.9547 13.0886 13.0189 13.1498 13.0931 13.1969C13.1673 13.244 13.2501 13.276 13.3367 13.2911C13.4233 13.3062 13.512 13.304 13.5977 13.2848C13.6835 13.2656 13.7646 13.2296 13.8365 13.179C13.9083 13.1284 13.9695 13.0642 14.0165 12.9899C14.0635 12.9157 14.0954 12.8329 14.1104 12.7463C14.1254 12.6597 14.1232 12.5709 14.1038 12.4852C14.0845 12.3995 14.0485 12.3184 13.9978 12.2466C13.0586 10.9142 11.7368 9.89855 10.2074 9.33435V9.33443ZM3.75385 5.15897C3.75385 4.43149 3.96958 3.72034 4.37374 3.11546C4.77791 2.51058 5.35237 2.03913 6.02448 1.76074C6.69659 1.48234 7.43616 1.4095 8.14966 1.55143C8.86317 1.69335 9.51857 2.04367 10.033 2.55808C10.5474 3.07249 10.8977 3.72788 11.0396 4.44139C11.1816 5.15489 11.1087 5.89446 10.8303 6.56657C10.5519 7.23868 10.0805 7.81314 9.47559 8.21731C8.87071 8.62148 8.15956 8.8372 7.43208 8.8372C6.45689 8.83609 5.52196 8.44821 4.8324 7.75865C4.14284 7.06909 3.75496 6.13416 3.75385 5.15897ZM20.6509 13.1785C20.5791 13.2291 20.4981 13.265 20.4124 13.2843C20.3267 13.3035 20.2381 13.3057 20.1515 13.2907C20.065 13.2756 19.9823 13.2437 19.9081 13.1967C19.8339 13.1497 19.7697 13.0886 19.7191 13.0168C19.1011 12.1396 18.2816 11.4236 17.3293 10.929C16.3771 10.4345 15.32 10.1758 14.247 10.1747C14.0696 10.1747 13.8995 10.1043 13.7741 9.97886C13.6487 9.85344 13.5782 9.68334 13.5782 9.50597C13.5782 9.3286 13.6487 9.1585 13.7741 9.03308C13.8995 8.90766 14.0696 8.8372 14.247 8.8372C14.7722 8.83661 15.2913 8.72353 15.7692 8.50558C16.2471 8.28762 16.6727 7.96984 17.0175 7.57362C17.3624 7.17739 17.6183 6.71191 17.7682 6.2085C17.9181 5.70508 17.9584 5.17541 17.8864 4.65511C17.8145 4.13481 17.6319 3.63596 17.351 3.19211C17.0702 2.74826 16.6975 2.36971 16.2581 2.08194C15.8187 1.79416 15.3228 1.60383 14.8037 1.52375C14.2845 1.44367 13.7543 1.4757 13.2486 1.61768C13.0781 1.66497 12.8958 1.64276 12.7416 1.55591C12.5875 1.46907 12.474 1.32468 12.4261 1.15435C12.3782 0.984021 12.3997 0.801645 12.486 0.647162C12.5723 0.49268 12.7162 0.378681 12.8864 0.330133C14.0368 0.00554594 15.2654 0.102571 16.3506 0.603721C17.4359 1.10487 18.3064 1.97718 18.8053 3.06344C19.3043 4.14969 19.3988 5.37844 19.0718 6.52822C18.7449 7.67801 18.018 8.6732 17.0222 9.33443C18.5516 9.89861 19.8735 10.9142 20.8127 12.2467C20.9148 12.3917 20.9552 12.5713 20.9248 12.7461C20.8945 12.9208 20.796 13.0764 20.6509 13.1785Z" fill="white"/>
                        </svg>
                    </circle>
                    <p>Total Users</p>
                    <div className="price">
                        <p>9,721</p>
                        <div className="capsule">+2.5%</div>
                    </div>
                </div>
            </div>
            <div className="row row-2">
                <div className="card bar-graph">
                    <h4 style={{marginBottom: 0}}>Activity</h4>
                    <span className="activity">
                        May - June 2021 
                    </span>
                    <Barchart />
                </div>
            </div>
            <div className="row row-3">
                <Box className='box' sx={{
                    backgroundColor: "#fff",
                    p: 1,
                    pl: 10,
                    pr: 10,
                    borderRadius: 5,
                    textAlign: 'center',
                }} >
                    <h4 style={{textAlign: 'left', marginBottom: '0'}}>Top Products</h4>
                    <Doughnutchart />
                </Box>
                
                <Profile />
            </div>
        </div>
    )
}

export default Body