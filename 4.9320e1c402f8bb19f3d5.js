(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{rrhf:function(l,n,C){"use strict";C.r(n);var u=C("CcnG"),t=function(){},a=C("pMnS"),e=C("Ip0R"),r=C("WE+f"),s=C("aZ8m"),o=C("sorN"),i=C("XVt8"),c=C("U8X/"),d=C("VkHG"),h=C("251L"),f=function(){function l(l,n){this.router=l,this.offerService=n,this.serviceCost=25}return l.prototype.ngOnInit=function(){this.offer$=this.offerService.getOfferObserver()},l.prototype.goToStep3=function(){this.router.navigateByUrl("/step3")},l.prototype.setWindow=function(){this.offerService.toggleWindow(this.serviceCost)},l.prototype.setIroning=function(){this.offerService.toggleIroning(this.serviceCost)},l.prototype.setOven=function(){this.offerService.toggleOven(this.serviceCost)},l.prototype.setFridge=function(){this.offerService.toggleFridge(this.serviceCost)},l}(),g=C("ZYCi"),p=u.La({encapsulation:0,styles:[[".selected[_ngcontent-%COMP%]{background:#d3d3d3}"]],data:{}});function v(l){return u.eb(0,[u.Xa(0,e.d,[u.s]),(l()(),u.Na(1,0,null,null,2,"capp-header",[],null,null,null,r.b,r.a)),u.Ma(2,114688,null,0,s.a,[],{total:[0,"total"]},null),u.Xa(131072,e.b,[u.h]),(l()(),u.Na(4,0,null,null,1,"capp-step",[["title","STEP 2"]],null,null,null,o.b,o.a)),u.Ma(5,114688,null,0,i.a,[],{left:[0,"left"],right:[1,"right"],title:[2,"title"]},null),(l()(),u.Na(6,0,null,null,5,"div",[["class","home-container"]],null,null,null,null,null)),(l()(),u.Na(7,0,null,null,1,"h3",[["class","step-title"]],null,null,null,null,null)),(l()(),u.cb(-1,null,["Choose what to clean"])),(l()(),u.Na(9,0,null,null,2,"div",[["class","caption"]],null,null,null,null,null)),(l()(),u.cb(10,null,["+ "," PER ITEM"])),u.Za(11,1),(l()(),u.Na(12,0,null,null,62,"div",[["class","services-container"]],null,null,null,null,null)),(l()(),u.Na(13,0,null,null,33,"div",[["class","service-group"]],null,null,null,null,null)),(l()(),u.Na(14,0,null,null,12,"div",[["class","service pointer padding"]],null,[[null,"click"]],function(l,n,C){var u=!0;return"click"===n&&(u=!1!==l.component.setWindow()&&u),u},null,null)),u.Ma(15,278528,null,0,e.k,[u.q,u.r,u.k,u.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Xa(131072,e.b,[u.h]),u.Ya(17,{selected:0}),(l()(),u.Na(18,0,null,null,8,":svg:svg",[["fill","none"],["height","98"],["viewBox","0 0 70 98"],["width","70"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),u.Na(19,0,null,null,0,":svg:rect",[["fill","#FAFAFA"],["height","70"],["rx","35"],["width","70"]],null,null,null,null,null)),(l()(),u.Na(20,0,null,null,0,":svg:rect",[["fill","#7FCDE6"],["height","43"],["transform","translate(24 17)"],["width","28"]],null,null,null,null,null)),(l()(),u.Na(21,0,null,null,0,":svg:path",[["d","M1 0.5V47.6699"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","2"],["transform","translate(34 11)"]],null,null,null,null,null)),(l()(),u.Na(22,0,null,null,0,":svg:path",[["d","M0 1.5H31"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","2"],["transform","translate(20 34)"]],null,null,null,null,null)),(l()(),u.Na(23,0,null,null,0,":svg:rect",[["height","47"],["stroke","#8198AC"],["stroke-width","3"],["transform","translate(18 10)"],["width","31"],["x","1.5"],["y","1.5"]],null,null,null,null,null)),(l()(),u.Na(24,0,null,null,0,":svg:path",[["d","M1 0.5V47.6699"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","2"],["transform","translate(34 11)"]],null,null,null,null,null)),(l()(),u.Na(25,0,null,null,0,":svg:path",[["d","M0 1.5H31"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","2"],["transform","translate(20 34)"]],null,null,null,null,null)),(l()(),u.Na(26,0,null,null,0,":svg:path",[["d","M13.042 3.294L10.342 12H8.71597L6.93397 6.306C6.90597 6.226 6.87797 6.138 6.84997 6.042C6.82197 5.946 6.79597 5.844 6.77197 5.736C6.74797 5.844 6.72197 5.946 6.69397 6.042C6.66597 6.138 6.63797 6.226 6.60997 6.306L4.80997 12H3.17797L0.483969 3.294H1.99597C2.15197 3.294 2.28197 3.33 2.38597 3.402C2.49397 3.474 2.56397 3.57 2.59597 3.69L3.94597 8.598C3.97797 8.734 4.00997 8.882 4.04197 9.042C4.07797 9.198 4.11197 9.364 4.14397 9.54C4.17997 9.36 4.21797 9.192 4.25797 9.036C4.29797 8.88 4.34197 8.734 4.38997 8.598L5.96197 3.69C5.99397 3.59 6.06197 3.5 6.16597 3.42C6.27397 3.336 6.40397 3.294 6.55597 3.294H7.08397C7.23997 3.294 7.36597 3.332 7.46197 3.408C7.56197 3.48 7.63597 3.574 7.68397 3.69L9.24997 8.598C9.29797 8.726 9.34197 8.866 9.38197 9.018C9.42197 9.166 9.45997 9.324 9.49597 9.492C9.52797 9.324 9.55797 9.166 9.58597 9.018C9.61797 8.866 9.64997 8.726 9.68197 8.598L11.032 3.69C11.06 3.586 11.128 3.494 11.236 3.414C11.344 3.334 11.474 3.294 11.626 3.294H13.042ZM15.4271 5.814V12H13.7711V5.814H15.4271ZM15.6251 4.056C15.6251 4.196 15.5971 4.326 15.5411 4.446C15.4851 4.566 15.4091 4.672 15.3131 4.764C15.2211 4.856 15.1111 4.928 14.9831 4.98C14.8591 5.032 14.7251 5.058 14.5811 5.058C14.4451 5.058 14.3151 5.032 14.1911 4.98C14.0711 4.928 13.9651 4.856 13.8731 4.764C13.7811 4.672 13.7071 4.566 13.6511 4.446C13.5991 4.326 13.5731 4.196 13.5731 4.056C13.5731 3.916 13.5991 3.786 13.6511 3.666C13.7071 3.542 13.7811 3.434 13.8731 3.342C13.9651 3.25 14.0711 3.178 14.1911 3.126C14.3151 3.074 14.4451 3.048 14.5811 3.048C14.7251 3.048 14.8591 3.074 14.9831 3.126C15.1111 3.178 15.2211 3.25 15.3131 3.342C15.4091 3.434 15.4851 3.542 15.5411 3.666C15.5971 3.786 15.6251 3.916 15.6251 4.056ZM18.3763 6.534C18.5003 6.414 18.6283 6.304 18.7603 6.204C18.8963 6.104 19.0383 6.018 19.1862 5.946C19.3383 5.874 19.5003 5.818 19.6723 5.778C19.8483 5.738 20.0383 5.718 20.2423 5.718C20.5783 5.718 20.8763 5.776 21.1363 5.892C21.3963 6.008 21.6143 6.17 21.7903 6.378C21.9703 6.586 22.1043 6.834 22.1923 7.122C22.2843 7.41 22.3303 7.726 22.3303 8.07V12H20.6803V8.07C20.6803 7.726 20.6003 7.46 20.4403 7.272C20.2803 7.08 20.0443 6.984 19.7323 6.984C19.5003 6.984 19.2823 7.034 19.0783 7.134C18.8743 7.234 18.6803 7.374 18.4963 7.554V12H16.8403V5.814H17.8603C18.0683 5.814 18.2063 5.91 18.2743 6.102L18.3763 6.534ZM27.4708 7.422C27.3148 7.242 27.1448 7.116 26.9608 7.044C26.7808 6.972 26.5888 6.936 26.3848 6.936C26.1848 6.936 26.0028 6.974 25.8388 7.05C25.6748 7.126 25.5328 7.246 25.4128 7.41C25.2968 7.57 25.2068 7.776 25.1428 8.028C25.0788 8.28 25.0468 8.58 25.0468 8.928C25.0468 9.272 25.0728 9.564 25.1248 9.804C25.1768 10.044 25.2508 10.238 25.3468 10.386C25.4468 10.534 25.5668 10.642 25.7068 10.71C25.8468 10.774 26.0028 10.806 26.1748 10.806C26.4668 10.806 26.7108 10.748 26.9068 10.632C27.1068 10.516 27.2948 10.352 27.4708 10.14V7.422ZM29.1268 3.054V12H28.1068C27.8948 12 27.7588 11.904 27.6988 11.712L27.5608 11.172C27.4368 11.308 27.3048 11.432 27.1648 11.544C27.0288 11.656 26.8808 11.754 26.7208 11.838C26.5608 11.918 26.3888 11.98 26.2048 12.024C26.0208 12.068 25.8208 12.09 25.6048 12.09C25.2728 12.09 24.9688 12.02 24.6928 11.88C24.4168 11.74 24.1768 11.536 23.9728 11.268C23.7728 10.996 23.6168 10.664 23.5048 10.272C23.3928 9.88 23.3368 9.432 23.3368 8.928C23.3368 8.468 23.3988 8.04 23.5228 7.644C23.6508 7.248 23.8308 6.906 24.0628 6.618C24.2948 6.33 24.5748 6.104 24.9028 5.94C25.2308 5.776 25.5948 5.694 25.9948 5.694C26.3308 5.694 26.6128 5.744 26.8408 5.844C27.0728 5.944 27.2828 6.08 27.4708 6.252V3.054H29.1268ZM33.2943 5.718C33.7583 5.718 34.1803 5.792 34.5603 5.94C34.9403 6.088 35.2663 6.3 35.5383 6.576C35.8103 6.848 36.0203 7.18 36.1683 7.572C36.3163 7.964 36.3903 8.406 36.3903 8.898C36.3903 9.39 36.3163 9.834 36.1683 10.23C36.0203 10.622 35.8103 10.956 35.5383 11.232C35.2663 11.508 34.9403 11.72 34.5603 11.868C34.1803 12.016 33.7583 12.09 33.2943 12.09C32.8263 12.09 32.4003 12.016 32.0163 11.868C31.6363 11.72 31.3103 11.508 31.0383 11.232C30.7663 10.956 30.5543 10.622 30.4023 10.23C30.2543 9.834 30.1803 9.39 30.1803 8.898C30.1803 8.406 30.2543 7.964 30.4023 7.572C30.5543 7.18 30.7663 6.848 31.0383 6.576C31.3103 6.3 31.6363 6.088 32.0163 5.94C32.4003 5.792 32.8263 5.718 33.2943 5.718ZM33.2943 10.848C33.7663 10.848 34.1163 10.686 34.3443 10.362C34.5723 10.034 34.6863 9.548 34.6863 8.904C34.6863 8.264 34.5723 7.782 34.3443 7.458C34.1163 7.13 33.7663 6.966 33.2943 6.966C32.8103 6.966 32.4543 7.13 32.2263 7.458C31.9983 7.782 31.8843 8.264 31.8843 8.904C31.8843 9.548 31.9983 10.034 32.2263 10.362C32.4543 10.686 32.8103 10.848 33.2943 10.848ZM46.2826 5.814L44.3386 12H43.0006C42.9326 12 42.8706 11.978 42.8146 11.934C42.7626 11.89 42.7226 11.816 42.6946 11.712L41.6866 8.364C41.6466 8.236 41.6106 8.11 41.5786 7.986C41.5506 7.858 41.5246 7.73 41.5006 7.602C41.4726 7.73 41.4426 7.86 41.4106 7.992C41.3826 8.12 41.3486 8.248 41.3086 8.376L40.2886 11.712C40.2326 11.904 40.1126 12 39.9286 12H38.6566L36.7126 5.814H38.0326C38.1526 5.814 38.2526 5.842 38.3326 5.898C38.4166 5.954 38.4726 6.026 38.5006 6.114L39.2626 9.174C39.3106 9.37 39.3526 9.56 39.3886 9.744C39.4246 9.928 39.4586 10.11 39.4906 10.29C39.5386 10.11 39.5886 9.928 39.6406 9.744C39.6966 9.56 39.7546 9.37 39.8146 9.174L40.7206 6.102C40.7486 6.018 40.8026 5.948 40.8826 5.892C40.9626 5.836 41.0566 5.808 41.1646 5.808H41.8966C42.0126 5.808 42.1106 5.836 42.1906 5.892C42.2746 5.948 42.3306 6.018 42.3586 6.102L43.2346 9.174C43.2906 9.366 43.3446 9.556 43.3966 9.744C43.4486 9.928 43.4966 10.114 43.5406 10.302C43.5726 10.118 43.6066 9.934 43.6426 9.75C43.6826 9.562 43.7286 9.37 43.7806 9.174L44.5786 6.114C44.6066 6.026 44.6606 5.954 44.7406 5.898C44.8206 5.842 44.9146 5.814 45.0226 5.814H46.2826ZM50.8034 7.086C50.7594 7.154 50.7134 7.204 50.6654 7.236C50.6214 7.264 50.5594 7.278 50.4794 7.278C50.3994 7.278 50.3174 7.258 50.2334 7.218C50.1494 7.178 50.0554 7.136 49.9514 7.092C49.8474 7.044 49.7274 7 49.5914 6.96C49.4594 6.92 49.3054 6.9 49.1294 6.9C48.8614 6.9 48.6534 6.956 48.5054 7.068C48.3574 7.176 48.2834 7.32 48.2834 7.5C48.2834 7.624 48.3254 7.728 48.4094 7.812C48.4934 7.896 48.6034 7.97 48.7394 8.034C48.8794 8.094 49.0374 8.152 49.2134 8.208C49.3894 8.26 49.5694 8.318 49.7534 8.382C49.9414 8.446 50.1234 8.52 50.2994 8.604C50.4754 8.688 50.6314 8.794 50.7674 8.922C50.9074 9.046 51.0194 9.198 51.1034 9.378C51.1874 9.554 51.2294 9.768 51.2294 10.02C51.2294 10.32 51.1734 10.598 51.0614 10.854C50.9534 11.106 50.7934 11.324 50.5814 11.508C50.3694 11.692 50.1054 11.836 49.7894 11.94C49.4734 12.044 49.1094 12.096 48.6974 12.096C48.4854 12.096 48.2754 12.076 48.0674 12.036C47.8594 12 47.6614 11.948 47.4734 11.88C47.2854 11.808 47.1094 11.726 46.9454 11.634C46.7814 11.542 46.6394 11.442 46.5194 11.334L46.9034 10.716C46.9474 10.644 47.0014 10.588 47.0654 10.548C47.1334 10.508 47.2194 10.488 47.3234 10.488C47.4234 10.488 47.5154 10.514 47.5994 10.566C47.6834 10.614 47.7774 10.668 47.8814 10.728C47.9854 10.784 48.1074 10.838 48.2474 10.89C48.3914 10.938 48.5694 10.962 48.7814 10.962C48.9414 10.962 49.0794 10.944 49.1954 10.908C49.3114 10.872 49.4054 10.824 49.4774 10.764C49.5494 10.7 49.6014 10.63 49.6334 10.554C49.6694 10.474 49.6874 10.392 49.6874 10.308C49.6874 10.172 49.6434 10.062 49.5554 9.978C49.4714 9.89 49.3594 9.814 49.2194 9.75C49.0834 9.686 48.9254 9.628 48.7454 9.576C48.5654 9.524 48.3814 9.466 48.1934 9.402C48.0094 9.338 47.8274 9.262 47.6474 9.174C47.4714 9.086 47.3134 8.976 47.1734 8.844C47.0374 8.708 46.9254 8.542 46.8374 8.346C46.7534 8.15 46.7114 7.912 46.7114 7.632C46.7114 7.376 46.7614 7.134 46.8614 6.906C46.9614 6.674 47.1114 6.47 47.3114 6.294C47.5114 6.118 47.7594 5.978 48.0554 5.874C48.3554 5.77 48.7014 5.718 49.0934 5.718C49.5334 5.718 49.9334 5.79 50.2934 5.934C50.6534 6.078 50.9494 6.266 51.1814 6.498L50.8034 7.086Z"],["fill","#5B6F81"],["transform","translate(9 83)"]],null,null,null,null,null)),(l()(),u.Na(27,0,null,null,19,"div",[["class","service pointer padding"]],null,[[null,"click"]],function(l,n,C){var u=!0;return"click"===n&&(u=!1!==l.component.setIroning()&&u),u},null,null)),u.Ma(28,278528,null,0,e.k,[u.q,u.r,u.k,u.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Xa(131072,e.b,[u.h]),u.Ya(30,{selected:0}),(l()(),u.Na(31,0,null,null,15,":svg:svg",[["fill","none"],["height","98"],["viewBox","0 0 70 98"],["width","70"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),u.Na(32,0,null,null,0,":svg:rect",[["fill","#FAFAFA"],["height","70"],["rx","35"],["width","70"]],null,null,null,null,null)),(l()(),u.Na(33,0,null,null,0,":svg:path",[["clip-rule","evenodd"],["d","M0 0L0 36.4126L0 38.1245L5.26074 39.3188H23.9443C23.9443 39.3188 22.8574 29.5269 22.8574 23.0757C22.8574 16.6245 19.4214 10.7417 13.8887 5.65869C8.35596 0.575684 0 0 0 0Z"],["fill","#7FCDE6"],["fill-rule","evenodd"],["transform","translate(25.1211 16.9302)"]],null,null,null,null,null)),(l()(),u.Na(34,0,null,null,0,":svg:path",[["d","M1 0V36"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","3"],["transform","translate(16.5 11.5)"]],null,null,null,null,null)),(l()(),u.Na(35,0,null,null,0,":svg:path",[["d","M1 0V38.5"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","2"],["transform","translate(22 11.5)"]],null,null,null,null,null)),(l()(),u.Na(36,0,null,null,0,":svg:path",[["d","M1.5 0.5V11.5"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","3"],["transform","translate(48 43)"]],null,null,null,null,null)),(l()(),u.Na(37,0,null,null,0,":svg:path",[["d","M23.6122 1.5H0.461538"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","3"],["transform","translate(25 53)"]],null,null,null,null,null)),(l()(),u.Na(38,0,null,null,0,":svg:path",[["d","M23.5 1.5H0.461538"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","3"],["transform","translate(26 56)"]],null,null,null,null,null)),(l()(),u.Na(39,0,null,null,0,":svg:path",[["d","M10 10C10 4.47715 5.52285 0 0 0"],["stroke","#8198AC"],["stroke-width","3"],["transform","translate(16 49)"]],null,null,null,null,null)),(l()(),u.Na(40,0,null,null,0,":svg:path",[["d","M33.499 31.1882C33.499 14.0674 17.1208 0 0 0"],["stroke","#8198AC"],["stroke-width","3"],["transform","translate(16 11)"]],null,null,null,null,null)),(l()(),u.Na(41,0,null,null,0,":svg:path",[["d","M1 0V7.09655"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","2"],["transform","translate(29 31)"]],null,null,null,null,null)),(l()(),u.Na(42,0,null,null,0,":svg:path",[["d","M1 0V15.3179"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","2"],["transform","translate(27 25.9743)"]],null,null,null,null,null)),(l()(),u.Na(43,0,null,null,0,":svg:path",[["d","M1 0.208333V4.5"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","2"],["transform","translate(39 38)"]],null,null,null,null,null)),(l()(),u.Na(44,0,null,null,0,":svg:path",[["d","M12 1H0"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","2"],["transform","translate(28 42)"]],null,null,null,null,null)),(l()(),u.Na(45,0,null,null,0,":svg:path",[["d","M13.0171 12.102C13.0171 5.0614 6.13301 0 0 0"],["stroke","#8198AC"],["stroke-width","2"],["transform","translate(27 25.2224)"]],null,null,null,null,null)),(l()(),u.Na(46,0,null,null,0,":svg:path",[["d","M2.74548 12H0.933484V3.294H2.74548V12ZM5.79855 6.834C5.99455 6.482 6.22055 6.204 6.47655 6C6.73255 5.796 7.03255 5.694 7.37655 5.694C7.65655 5.694 7.88455 5.76 8.06055 5.892L7.95255 7.116C7.93255 7.196 7.90055 7.252 7.85655 7.284C7.81655 7.312 7.76055 7.326 7.68855 7.326C7.62455 7.326 7.53255 7.318 7.41255 7.302C7.29255 7.282 7.18055 7.272 7.07655 7.272C6.92455 7.272 6.78855 7.294 6.66855 7.338C6.55255 7.382 6.44855 7.444 6.35655 7.524C6.26455 7.604 6.18055 7.702 6.10455 7.818C6.03255 7.934 5.96455 8.066 5.90055 8.214V12H4.24455V5.814H5.22255C5.39055 5.814 5.50655 5.844 5.57055 5.904C5.63455 5.964 5.68055 6.068 5.70855 6.216L5.79855 6.834ZM11.4174 5.718C11.8814 5.718 12.3034 5.792 12.6834 5.94C13.0634 6.088 13.3894 6.3 13.6614 6.576C13.9334 6.848 14.1434 7.18 14.2914 7.572C14.4394 7.964 14.5134 8.406 14.5134 8.898C14.5134 9.39 14.4394 9.834 14.2914 10.23C14.1434 10.622 13.9334 10.956 13.6614 11.232C13.3894 11.508 13.0634 11.72 12.6834 11.868C12.3034 12.016 11.8814 12.09 11.4174 12.09C10.9494 12.09 10.5234 12.016 10.1394 11.868C9.75936 11.72 9.43336 11.508 9.16136 11.232C8.88936 10.956 8.67736 10.622 8.52536 10.23C8.37736 9.834 8.30336 9.39 8.30336 8.898C8.30336 8.406 8.37736 7.964 8.52536 7.572C8.67736 7.18 8.88936 6.848 9.16136 6.576C9.43336 6.3 9.75936 6.088 10.1394 5.94C10.5234 5.792 10.9494 5.718 11.4174 5.718ZM11.4174 10.848C11.8894 10.848 12.2394 10.686 12.4674 10.362C12.6954 10.034 12.8094 9.548 12.8094 8.904C12.8094 8.264 12.6954 7.782 12.4674 7.458C12.2394 7.13 11.8894 6.966 11.4174 6.966C10.9334 6.966 10.5774 7.13 10.3494 7.458C10.1214 7.782 10.0074 8.264 10.0074 8.904C10.0074 9.548 10.1214 10.034 10.3494 10.362C10.5774 10.686 10.9334 10.848 11.4174 10.848ZM17.0891 6.534C17.2131 6.414 17.3411 6.304 17.4731 6.204C17.6091 6.104 17.7511 6.018 17.8991 5.946C18.0511 5.874 18.2131 5.818 18.3851 5.778C18.5611 5.738 18.7511 5.718 18.9551 5.718C19.2911 5.718 19.5891 5.776 19.8491 5.892C20.1091 6.008 20.3271 6.17 20.5031 6.378C20.6831 6.586 20.8171 6.834 20.9051 7.122C20.9971 7.41 21.0431 7.726 21.0431 8.07V12H19.3931V8.07C19.3931 7.726 19.3131 7.46 19.1531 7.272C18.9931 7.08 18.7571 6.984 18.4451 6.984C18.2131 6.984 17.9951 7.034 17.7911 7.134C17.5871 7.234 17.3931 7.374 17.2091 7.554V12H15.5531V5.814H16.5731C16.7811 5.814 16.9191 5.91 16.9871 6.102L17.0891 6.534ZM24.0657 5.814V12H22.4097V5.814H24.0657ZM24.2637 4.056C24.2637 4.196 24.2357 4.326 24.1797 4.446C24.1237 4.566 24.0477 4.672 23.9517 4.764C23.8597 4.856 23.7497 4.928 23.6217 4.98C23.4977 5.032 23.3637 5.058 23.2197 5.058C23.0837 5.058 22.9537 5.032 22.8297 4.98C22.7097 4.928 22.6037 4.856 22.5117 4.764C22.4197 4.672 22.3457 4.566 22.2897 4.446C22.2377 4.326 22.2117 4.196 22.2117 4.056C22.2117 3.916 22.2377 3.786 22.2897 3.666C22.3457 3.542 22.4197 3.434 22.5117 3.342C22.6037 3.25 22.7097 3.178 22.8297 3.126C22.9537 3.074 23.0837 3.048 23.2197 3.048C23.3637 3.048 23.4977 3.074 23.6217 3.126C23.7497 3.178 23.8597 3.25 23.9517 3.342C24.0477 3.434 24.1237 3.542 24.1797 3.666C24.2357 3.786 24.2637 3.916 24.2637 4.056ZM27.0149 6.534C27.1389 6.414 27.2669 6.304 27.3989 6.204C27.5349 6.104 27.6769 6.018 27.8249 5.946C27.9769 5.874 28.1389 5.818 28.3109 5.778C28.4869 5.738 28.6769 5.718 28.8809 5.718C29.2169 5.718 29.5149 5.776 29.7749 5.892C30.0349 6.008 30.2529 6.17 30.4289 6.378C30.6089 6.586 30.7429 6.834 30.8309 7.122C30.9229 7.41 30.9689 7.726 30.9689 8.07V12H29.3189V8.07C29.3189 7.726 29.2389 7.46 29.0789 7.272C28.9189 7.08 28.6829 6.984 28.3709 6.984C28.1389 6.984 27.9209 7.034 27.7169 7.134C27.5129 7.234 27.3189 7.374 27.1349 7.554V12H25.4789V5.814H26.4989C26.7069 5.814 26.8449 5.91 26.9129 6.102L27.0149 6.534ZM34.5915 8.676C34.9315 8.676 35.1815 8.59 35.3415 8.418C35.5055 8.246 35.5875 8.024 35.5875 7.752C35.5875 7.468 35.5055 7.246 35.3415 7.086C35.1815 6.922 34.9315 6.84 34.5915 6.84C34.2515 6.84 34.0015 6.922 33.8415 7.086C33.6815 7.246 33.6015 7.468 33.6015 7.752C33.6015 8.02 33.6815 8.242 33.8415 8.418C34.0055 8.59 34.2555 8.676 34.5915 8.676ZM36.1575 12.252C36.1575 12.144 36.1235 12.056 36.0555 11.988C35.9875 11.92 35.8955 11.866 35.7795 11.826C35.6675 11.786 35.5335 11.758 35.3775 11.742C35.2215 11.722 35.0555 11.708 34.8795 11.7C34.7035 11.688 34.5215 11.678 34.3335 11.67C34.1455 11.662 33.9615 11.648 33.7815 11.628C33.6415 11.712 33.5255 11.812 33.4335 11.928C33.3455 12.04 33.3015 12.168 33.3015 12.312C33.3015 12.412 33.3235 12.504 33.3675 12.588C33.4155 12.672 33.4935 12.744 33.6015 12.804C33.7095 12.864 33.8515 12.91 34.0275 12.942C34.2035 12.978 34.4235 12.996 34.6875 12.996C34.9595 12.996 35.1895 12.978 35.3775 12.942C35.5655 12.906 35.7175 12.854 35.8335 12.786C35.9495 12.722 36.0315 12.644 36.0795 12.552C36.1315 12.46 36.1575 12.36 36.1575 12.252ZM37.8015 6.018V6.624C37.8015 6.72 37.7735 6.796 37.7175 6.852C37.6655 6.908 37.5775 6.95 37.4535 6.978L36.9495 7.08C37.0175 7.276 37.0515 7.486 37.0515 7.71C37.0515 8.018 36.9875 8.296 36.8595 8.544C36.7355 8.788 36.5635 8.998 36.3435 9.174C36.1235 9.346 35.8635 9.48 35.5635 9.576C35.2635 9.668 34.9395 9.714 34.5915 9.714C34.3715 9.714 34.1655 9.696 33.9735 9.66C33.8055 9.764 33.7215 9.878 33.7215 10.002C33.7215 10.118 33.7775 10.202 33.8895 10.254C34.0055 10.306 34.1555 10.344 34.3395 10.368C34.5275 10.388 34.7395 10.402 34.9755 10.41C35.2155 10.414 35.4575 10.426 35.7015 10.446C35.9495 10.466 36.1915 10.502 36.4275 10.554C36.6675 10.602 36.8795 10.684 37.0635 10.8C37.2515 10.912 37.4015 11.062 37.5135 11.25C37.6295 11.438 37.6875 11.68 37.6875 11.976C37.6875 12.252 37.6195 12.52 37.4835 12.78C37.3475 13.04 37.1495 13.272 36.8895 13.476C36.6335 13.68 36.3175 13.844 35.9415 13.968C35.5655 14.092 35.1375 14.154 34.6575 14.154C34.1815 14.154 33.7675 14.108 33.4155 14.016C33.0675 13.928 32.7775 13.808 32.5455 13.656C32.3175 13.508 32.1475 13.336 32.0355 13.14C31.9235 12.944 31.8675 12.74 31.8675 12.528C31.8675 12.252 31.9515 12.018 32.1195 11.826C32.2875 11.634 32.5195 11.48 32.8155 11.364C32.6595 11.276 32.5335 11.162 32.4375 11.022C32.3455 10.878 32.2995 10.692 32.2995 10.464C32.2995 10.28 32.3655 10.086 32.4975 9.882C32.6335 9.678 32.8415 9.508 33.1215 9.372C32.8055 9.204 32.5555 8.98 32.3715 8.7C32.1875 8.416 32.0955 8.086 32.0955 7.71C32.0955 7.402 32.1575 7.124 32.2815 6.876C32.4095 6.628 32.5855 6.418 32.8095 6.246C33.0335 6.07 33.2975 5.936 33.6015 5.844C33.9055 5.752 34.2355 5.706 34.5915 5.706C35.1195 5.706 35.5855 5.81 35.9895 6.018H37.8015Z"],["fill","#5B6F81"],["transform","translate(16 83)"]],null,null,null,null,null)),(l()(),u.Na(47,0,null,null,27,"div",[["class","service-group"]],null,null,null,null,null)),(l()(),u.Na(48,0,null,null,10,"div",[["class","service padding"]],null,[[null,"click"]],function(l,n,C){var u=!0;return"click"===n&&(u=!1!==l.component.setFridge()&&u),u},null,null)),u.Ma(49,278528,null,0,e.k,[u.q,u.r,u.k,u.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Xa(131072,e.b,[u.h]),u.Ya(51,{selected:0}),(l()(),u.Na(52,0,null,null,6,":svg:svg",[["fill","none"],["height","98"],["viewBox","0 0 70 98"],["width","70"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),u.Na(53,0,null,null,0,":svg:rect",[["fill","#FAFAFA"],["height","70"],["rx","35"],["width","70"]],null,null,null,null,null)),(l()(),u.Na(54,0,null,null,0,":svg:path",[["d","M2.96619 4.704V7.11H6.09819V8.526H2.96619V12H1.15419V3.294H6.69819V4.704H2.96619ZM8.80831 6.834C9.00431 6.482 9.23031 6.204 9.48631 6C9.74231 5.796 10.0423 5.694 10.3863 5.694C10.6663 5.694 10.8943 5.76 11.0703 5.892L10.9623 7.116C10.9423 7.196 10.9103 7.252 10.8663 7.284C10.8263 7.312 10.7703 7.326 10.6983 7.326C10.6343 7.326 10.5423 7.318 10.4223 7.302C10.3023 7.282 10.1903 7.272 10.0863 7.272C9.93431 7.272 9.79831 7.294 9.67831 7.338C9.56231 7.382 9.45831 7.444 9.36631 7.524C9.27431 7.604 9.19031 7.702 9.11431 7.818C9.04231 7.934 8.97431 8.066 8.91031 8.214V12H7.25431V5.814H8.23231C8.40031 5.814 8.51631 5.844 8.58031 5.904C8.64431 5.964 8.69031 6.068 8.71831 6.216L8.80831 6.834ZM13.4818 5.814V12H11.8258V5.814H13.4818ZM13.6798 4.056C13.6798 4.196 13.6518 4.326 13.5958 4.446C13.5398 4.566 13.4638 4.672 13.3678 4.764C13.2758 4.856 13.1658 4.928 13.0378 4.98C12.9138 5.032 12.7798 5.058 12.6357 5.058C12.4998 5.058 12.3698 5.032 12.2458 4.98C12.1258 4.928 12.0198 4.856 11.9278 4.764C11.8358 4.672 11.7618 4.566 11.7058 4.446C11.6538 4.326 11.6278 4.196 11.6278 4.056C11.6278 3.916 11.6538 3.786 11.7058 3.666C11.7618 3.542 11.8358 3.434 11.9278 3.342C12.0198 3.25 12.1258 3.178 12.2458 3.126C12.3698 3.074 12.4998 3.048 12.6357 3.048C12.7798 3.048 12.9138 3.074 13.0378 3.126C13.1658 3.178 13.2758 3.25 13.3678 3.342C13.4638 3.434 13.5398 3.542 13.5958 3.666C13.6518 3.786 13.6798 3.916 13.6798 4.056ZM18.7169 7.422C18.5609 7.242 18.3909 7.116 18.2069 7.044C18.0269 6.972 17.8349 6.936 17.6309 6.936C17.4309 6.936 17.2489 6.974 17.0849 7.05C16.9209 7.126 16.7789 7.246 16.6589 7.41C16.5429 7.57 16.4529 7.776 16.3889 8.028C16.3249 8.28 16.2929 8.58 16.2929 8.928C16.2929 9.272 16.3189 9.564 16.3709 9.804C16.4229 10.044 16.4969 10.238 16.5929 10.386C16.6929 10.534 16.8129 10.642 16.9529 10.71C17.0929 10.774 17.2489 10.806 17.4209 10.806C17.7129 10.806 17.9569 10.748 18.1529 10.632C18.3529 10.516 18.5409 10.352 18.7169 10.14V7.422ZM20.3729 3.054V12H19.3529C19.1409 12 19.0049 11.904 18.9449 11.712L18.8069 11.172C18.6829 11.308 18.5509 11.432 18.4109 11.544C18.2749 11.656 18.1269 11.754 17.9669 11.838C17.8069 11.918 17.6349 11.98 17.4509 12.024C17.2669 12.068 17.0669 12.09 16.8509 12.09C16.5189 12.09 16.2149 12.02 15.9389 11.88C15.6629 11.74 15.4229 11.536 15.2189 11.268C15.0189 10.996 14.8629 10.664 14.7509 10.272C14.6389 9.88 14.5829 9.432 14.5829 8.928C14.5829 8.468 14.6449 8.04 14.7689 7.644C14.8969 7.248 15.0769 6.906 15.3089 6.618C15.5409 6.33 15.8209 6.104 16.1489 5.94C16.4769 5.776 16.8409 5.694 17.2409 5.694C17.5769 5.694 17.8589 5.744 18.0869 5.844C18.3189 5.944 18.5289 6.08 18.7169 6.252V3.054H20.3729ZM24.0544 8.676C24.3944 8.676 24.6444 8.59 24.8044 8.418C24.9684 8.246 25.0504 8.024 25.0504 7.752C25.0504 7.468 24.9684 7.246 24.8044 7.086C24.6444 6.922 24.3944 6.84 24.0544 6.84C23.7144 6.84 23.4644 6.922 23.3044 7.086C23.1444 7.246 23.0644 7.468 23.0644 7.752C23.0644 8.02 23.1444 8.242 23.3044 8.418C23.4684 8.59 23.7184 8.676 24.0544 8.676ZM25.6204 12.252C25.6204 12.144 25.5864 12.056 25.5184 11.988C25.4504 11.92 25.3584 11.866 25.2424 11.826C25.1304 11.786 24.9964 11.758 24.8404 11.742C24.6844 11.722 24.5184 11.708 24.3424 11.7C24.1664 11.688 23.9844 11.678 23.7964 11.67C23.6084 11.662 23.4244 11.648 23.2444 11.628C23.1044 11.712 22.9884 11.812 22.8964 11.928C22.8084 12.04 22.7644 12.168 22.7644 12.312C22.7644 12.412 22.7864 12.504 22.8304 12.588C22.8784 12.672 22.9564 12.744 23.0644 12.804C23.1724 12.864 23.3144 12.91 23.4904 12.942C23.6664 12.978 23.8864 12.996 24.1504 12.996C24.4224 12.996 24.6524 12.978 24.8404 12.942C25.0284 12.906 25.1804 12.854 25.2964 12.786C25.4124 12.722 25.4944 12.644 25.5424 12.552C25.5944 12.46 25.6204 12.36 25.6204 12.252ZM27.2644 6.018V6.624C27.2644 6.72 27.2364 6.796 27.1804 6.852C27.1284 6.908 27.0404 6.95 26.9164 6.978L26.4124 7.08C26.4804 7.276 26.5144 7.486 26.5144 7.71C26.5144 8.018 26.4504 8.296 26.3224 8.544C26.1984 8.788 26.0264 8.998 25.8064 9.174C25.5864 9.346 25.3264 9.48 25.0264 9.576C24.7264 9.668 24.4024 9.714 24.0544 9.714C23.8344 9.714 23.6284 9.696 23.4364 9.66C23.2684 9.764 23.1844 9.878 23.1844 10.002C23.1844 10.118 23.2404 10.202 23.3524 10.254C23.4684 10.306 23.6184 10.344 23.8024 10.368C23.9904 10.388 24.2024 10.402 24.4384 10.41C24.6784 10.414 24.9204 10.426 25.1644 10.446C25.4124 10.466 25.6544 10.502 25.8904 10.554C26.1304 10.602 26.3424 10.684 26.5264 10.8C26.7144 10.912 26.8644 11.062 26.9764 11.25C27.0924 11.438 27.1504 11.68 27.1504 11.976C27.1504 12.252 27.0824 12.52 26.9464 12.78C26.8104 13.04 26.6124 13.272 26.3524 13.476C26.0964 13.68 25.7804 13.844 25.4044 13.968C25.0284 14.092 24.6004 14.154 24.1204 14.154C23.6444 14.154 23.2304 14.108 22.8784 14.016C22.5304 13.928 22.2404 13.808 22.0084 13.656C21.7804 13.508 21.6104 13.336 21.4984 13.14C21.3864 12.944 21.3304 12.74 21.3304 12.528C21.3304 12.252 21.4144 12.018 21.5824 11.826C21.7504 11.634 21.9824 11.48 22.2784 11.364C22.1224 11.276 21.9964 11.162 21.9004 11.022C21.8084 10.878 21.7624 10.692 21.7624 10.464C21.7624 10.28 21.8284 10.086 21.9604 9.882C22.0964 9.678 22.3044 9.508 22.5844 9.372C22.2684 9.204 22.0184 8.98 21.8344 8.7C21.6504 8.416 21.5584 8.086 21.5584 7.71C21.5584 7.402 21.6204 7.124 21.7444 6.876C21.8724 6.628 22.0484 6.418 22.2724 6.246C22.4964 6.07 22.7604 5.936 23.0644 5.844C23.3684 5.752 23.6984 5.706 24.0544 5.706C24.5824 5.706 25.0484 5.81 25.4524 6.018H27.2644ZM31.9322 8.178C31.9322 8.006 31.9082 7.842 31.8602 7.686C31.8162 7.53 31.7442 7.392 31.6442 7.272C31.5442 7.152 31.4182 7.058 31.2662 6.99C31.1142 6.918 30.9322 6.882 30.7202 6.882C30.3242 6.882 30.0142 6.994 29.7902 7.218C29.5662 7.442 29.4202 7.762 29.3522 8.178H31.9322ZM29.3282 9.162C29.3802 9.742 29.5442 10.166 29.8202 10.434C30.1002 10.702 30.4642 10.836 30.9122 10.836C31.1402 10.836 31.3362 10.81 31.5002 10.758C31.6682 10.702 31.8142 10.642 31.9382 10.578C32.0662 10.51 32.1802 10.45 32.2802 10.398C32.3842 10.342 32.4862 10.314 32.5862 10.314C32.7142 10.314 32.8142 10.362 32.8862 10.458L33.3662 11.058C33.1902 11.262 32.9962 11.432 32.7842 11.568C32.5722 11.7 32.3522 11.806 32.1242 11.886C31.8962 11.962 31.6662 12.014 31.4342 12.042C31.2022 12.074 30.9782 12.09 30.7622 12.09C30.3302 12.09 29.9262 12.02 29.5502 11.88C29.1782 11.736 28.8522 11.526 28.5722 11.25C28.2962 10.97 28.0782 10.624 27.9182 10.212C27.7582 9.8 27.6782 9.322 27.6782 8.778C27.6782 8.358 27.7462 7.962 27.8822 7.59C28.0222 7.218 28.2222 6.894 28.4822 6.618C28.7422 6.342 29.0582 6.124 29.4302 5.964C29.8022 5.8 30.2222 5.718 30.6902 5.718C31.0862 5.718 31.4502 5.782 31.7822 5.91C32.1182 6.034 32.4062 6.216 32.6462 6.456C32.8902 6.696 33.0782 6.992 33.2102 7.344C33.3462 7.692 33.4142 8.09 33.4142 8.538C33.4142 8.662 33.4082 8.764 33.3962 8.844C33.3842 8.924 33.3642 8.988 33.3362 9.036C33.3082 9.084 33.2702 9.118 33.2222 9.138C33.1742 9.154 33.1122 9.162 33.0362 9.162H29.3282Z"],["fill","#5B6F81"],["transform","translate(18 83)"]],null,null,null,null,null)),(l()(),u.Na(55,0,null,null,0,":svg:rect",[["fill","#7FCDE6"],["height","43"],["transform","translate(24 17)"],["width","28"]],null,null,null,null,null)),(l()(),u.Na(56,0,null,null,0,":svg:rect",[["height","47"],["stroke","#8198AC"],["stroke-width","3"],["transform","translate(18 10)"],["width","31"],["x","1.5"],["y","1.5"]],null,null,null,null,null)),(l()(),u.Na(57,0,null,null,0,":svg:path",[["d","M1 0.5V47.6699"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","2"],["transform","translate(34 11)"]],null,null,null,null,null)),(l()(),u.Na(58,0,null,null,0,":svg:path",[["d","M0.979203 1.5H7"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","2"],["transform","translate(34 34)"]],null,null,null,null,null)),(l()(),u.Na(59,0,null,null,15,"div",[["class","service padding"]],null,[[null,"click"]],function(l,n,C){var u=!0;return"click"===n&&(u=!1!==l.component.setOven()&&u),u},null,null)),u.Ma(60,278528,null,0,e.k,[u.q,u.r,u.k,u.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Xa(131072,e.b,[u.h]),u.Ya(62,{selected:0}),(l()(),u.Na(63,0,null,null,11,":svg:svg",[["fill","none"],["height","98"],["viewBox","0 0 70 98"],["width","70"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),u.Na(64,0,null,null,0,":svg:rect",[["fill","#FAFAFA"],["height","70"],["rx","35"],["width","70"]],null,null,null,null,null)),(l()(),u.Na(65,0,null,null,0,":svg:path",[["d","M9.74588 7.644C9.74588 8.28 9.63788 8.87 9.42188 9.414C9.20988 9.958 8.90788 10.428 8.51588 10.824C8.12788 11.22 7.65988 11.532 7.11188 11.76C6.56388 11.984 5.95588 12.096 5.28788 12.096C4.61988 12.096 4.01188 11.984 3.46388 11.76C2.91588 11.532 2.44588 11.22 2.05388 10.824C1.66188 10.428 1.35788 9.958 1.14188 9.414C0.929875 8.87 0.823875 8.28 0.823875 7.644C0.823875 7.008 0.929875 6.42 1.14188 5.88C1.35788 5.336 1.66188 4.866 2.05388 4.47C2.44588 4.074 2.91588 3.764 3.46388 3.54C4.01188 3.312 4.61988 3.198 5.28788 3.198C5.95588 3.198 6.56388 3.312 7.11188 3.54C7.65988 3.764 8.12788 4.076 8.51588 4.476C8.90788 4.872 9.20988 5.342 9.42188 5.886C9.63788 6.426 9.74588 7.012 9.74588 7.644ZM7.90388 7.644C7.90388 7.188 7.84388 6.78 7.72388 6.42C7.60388 6.056 7.42988 5.748 7.20187 5.496C6.97787 5.24 6.70388 5.046 6.37988 4.914C6.05988 4.778 5.69588 4.71 5.28788 4.71C4.87988 4.71 4.51388 4.778 4.18988 4.914C3.86588 5.046 3.58988 5.24 3.36188 5.496C3.13788 5.748 2.96588 6.056 2.84588 6.42C2.72588 6.78 2.66588 7.188 2.66588 7.644C2.66588 8.104 2.72588 8.516 2.84588 8.88C2.96588 9.24 3.13788 9.546 3.36188 9.798C3.58988 10.05 3.86588 10.244 4.18988 10.38C4.51388 10.512 4.87988 10.578 5.28788 10.578C5.69588 10.578 6.05988 10.512 6.37988 10.38C6.70388 10.244 6.97787 10.05 7.20187 9.798C7.42988 9.546 7.60388 9.24 7.72388 8.88C7.84388 8.516 7.90388 8.104 7.90388 7.644ZM16.5147 5.814L14.0847 12H12.5847L10.1547 5.814H11.5287C11.6487 5.814 11.7487 5.842 11.8287 5.898C11.9087 5.954 11.9647 6.026 11.9967 6.114L13.0347 9.174C13.1027 9.382 13.1627 9.586 13.2147 9.786C13.2667 9.982 13.3127 10.18 13.3527 10.38C13.3967 10.18 13.4447 9.982 13.4967 9.786C13.5527 9.586 13.6167 9.382 13.6887 9.174L14.7627 6.114C14.7907 6.026 14.8447 5.954 14.9247 5.898C15.0047 5.842 15.0987 5.814 15.2067 5.814H16.5147ZM20.9439 8.178C20.9439 8.006 20.9199 7.842 20.8719 7.686C20.8279 7.53 20.7559 7.392 20.6559 7.272C20.5559 7.152 20.4299 7.058 20.2779 6.99C20.1259 6.918 19.9439 6.882 19.7319 6.882C19.3359 6.882 19.0259 6.994 18.8019 7.218C18.5779 7.442 18.4319 7.762 18.3639 8.178H20.9439ZM18.3399 9.162C18.3919 9.742 18.5559 10.166 18.8319 10.434C19.1119 10.702 19.4759 10.836 19.9239 10.836C20.1519 10.836 20.3479 10.81 20.5119 10.758C20.6799 10.702 20.8259 10.642 20.9499 10.578C21.0779 10.51 21.1919 10.45 21.2919 10.398C21.3959 10.342 21.4979 10.314 21.5979 10.314C21.7259 10.314 21.8259 10.362 21.8979 10.458L22.3779 11.058C22.2019 11.262 22.0079 11.432 21.7959 11.568C21.5839 11.7 21.3639 11.806 21.1359 11.886C20.9079 11.962 20.6779 12.014 20.4459 12.042C20.2139 12.074 19.9899 12.09 19.7739 12.09C19.3419 12.09 18.9379 12.02 18.5619 11.88C18.1899 11.736 17.8639 11.526 17.5839 11.25C17.3079 10.97 17.0899 10.624 16.9299 10.212C16.7699 9.8 16.6899 9.322 16.6899 8.778C16.6899 8.358 16.7579 7.962 16.8939 7.59C17.0339 7.218 17.2339 6.894 17.4939 6.618C17.7539 6.342 18.0699 6.124 18.4419 5.964C18.8139 5.8 19.2339 5.718 19.7019 5.718C20.0979 5.718 20.4619 5.782 20.7939 5.91C21.1299 6.034 21.4179 6.216 21.6579 6.456C21.9019 6.696 22.0899 6.992 22.2219 7.344C22.3579 7.692 22.4259 8.09 22.4259 8.538C22.4259 8.662 22.4199 8.764 22.4079 8.844C22.3959 8.924 22.3759 8.988 22.3479 9.036C22.3199 9.084 22.2819 9.118 22.2339 9.138C22.1859 9.154 22.1239 9.162 22.0479 9.162H18.3399ZM24.9895 6.534C25.1135 6.414 25.2415 6.304 25.3735 6.204C25.5095 6.104 25.6515 6.018 25.7995 5.946C25.9515 5.874 26.1135 5.818 26.2855 5.778C26.4615 5.738 26.6515 5.718 26.8555 5.718C27.1915 5.718 27.4895 5.776 27.7495 5.892C28.0095 6.008 28.2275 6.17 28.4035 6.378C28.5835 6.586 28.7175 6.834 28.8055 7.122C28.8975 7.41 28.9435 7.726 28.9435 8.07V12H27.2935V8.07C27.2935 7.726 27.2135 7.46 27.0535 7.272C26.8935 7.08 26.6575 6.984 26.3455 6.984C26.1135 6.984 25.8955 7.034 25.6915 7.134C25.4875 7.234 25.2935 7.374 25.1095 7.554V12H23.4535V5.814H24.4735C24.6815 5.814 24.8195 5.91 24.8875 6.102L24.9895 6.534Z"],["fill","#5B6F81"],["transform","translate(20 83)"]],null,null,null,null,null)),(l()(),u.Na(66,0,null,null,0,":svg:rect",[["fill","#7FCDE6"],["height","20"],["transform","translate(27 32)"],["width","18"]],null,null,null,null,null)),(l()(),u.Na(67,0,null,null,0,":svg:rect",[["height","36"],["stroke","#8198AC"],["stroke-width","3"],["transform","translate(16 21)"],["width","36"],["x","1.5"],["y","1.5"]],null,null,null,null,null)),(l()(),u.Na(68,0,null,null,0,":svg:rect",[["height","10"],["stroke","#8198AC"],["stroke-width","3"],["transform","translate(16 24) scale(1 -1)"],["width","36"],["x","1.5"],["y","1.5"]],null,null,null,null,null)),(l()(),u.Na(69,0,null,null,0,":svg:rect",[["height","21"],["stroke","#8198AC"],["stroke-width","2"],["transform","translate(24 29)"],["width","21"],["x","1"],["y","1"]],null,null,null,null,null)),(l()(),u.Na(70,0,null,null,0,":svg:path",[["d","M0.625 1.5H9.375"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","3"],["transform","translate(39 9)"]],null,null,null,null,null)),(l()(),u.Na(71,0,null,null,0,":svg:path",[["clip-rule","evenodd"],["d","M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"],["fill","#8198AC"],["fill-rule","evenodd"],["transform","translate(24 16)"]],null,null,null,null,null)),(l()(),u.Na(72,0,null,null,0,":svg:path",[["clip-rule","evenodd"],["d","M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"],["fill","#8198AC"],["fill-rule","evenodd"],["transform","translate(34 16)"]],null,null,null,null,null)),(l()(),u.Na(73,0,null,null,0,":svg:path",[["clip-rule","evenodd"],["d","M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"],["fill","#8198AC"],["fill-rule","evenodd"],["transform","translate(44 16)"]],null,null,null,null,null)),(l()(),u.Na(74,0,null,null,0,":svg:path",[["d","M0.625 1.5H9.375"],["stroke","#8198AC"],["stroke-linecap","square"],["stroke-width","3"],["transform","translate(23 9)"]],null,null,null,null,null)),(l()(),u.Na(75,0,null,null,1,"capp-button",[["label","NEXT STEP"]],null,[[null,"click"]],function(l,n,C){var u=!0;return"click"===n&&(u=!1!==l.component.goToStep3()&&u),u},c.b,c.a)),u.Ma(76,114688,null,0,d.a,[],{label:[0,"label"]},{click:"click"})],function(l,n){var C,t,a,e,r,s=n.component;l(n,2,0,null==(C=u.db(n,2,0,u.Wa(n,3).transform(s.offer$)))?null:C.total),l(n,5,0,!0,!0,"STEP 2"),l(n,15,0,"service pointer padding",l(n,17,0,null==(t=u.db(n,15,1,u.Wa(n,16).transform(s.offer$)))?null:t.windows)),l(n,28,0,"service pointer padding",l(n,30,0,null==(a=u.db(n,28,1,u.Wa(n,29).transform(s.offer$)))?null:a.ironing)),l(n,49,0,"service padding",l(n,51,0,null==(e=u.db(n,49,1,u.Wa(n,50).transform(s.offer$)))?null:e.fridge)),l(n,60,0,"service padding",l(n,62,0,null==(r=u.db(n,60,1,u.Wa(n,61).transform(s.offer$)))?null:r.oven)),l(n,76,0,"NEXT STEP")},function(l,n){var C=n.component;l(n,10,0,u.db(n,10,0,l(n,11,0,u.Wa(n,0),C.serviceCost)))})}var k=u.Ja("capp-home",f,function(l){return u.eb(0,[(l()(),u.Na(0,0,null,null,1,"capp-home",[],null,null,null,v,p)),u.Ma(1,114688,null,0,f,[g.k,h.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),M=C("gIcY"),w=C("Sj5B"),V=C("PCNd"),N=function(){};C.d(n,"Step2ModuleNgFactory",function(){return H});var H=u.Ka(t,[],function(l){return u.Ua([u.Va(512,u.j,u.Z,[[8,[a.a,k]],[3,u.j],u.v]),u.Va(4608,e.n,e.m,[u.s,[2,e.t]]),u.Va(4608,M.i,M.i,[]),u.Va(1073742336,e.c,e.c,[]),u.Va(1073742336,M.h,M.h,[]),u.Va(1073742336,M.c,M.c,[]),u.Va(1073742336,g.l,g.l,[[2,g.r],[2,g.k]]),u.Va(1073742336,w.a,w.a,[]),u.Va(1073742336,V.a,V.a,[]),u.Va(1073742336,N,N,[]),u.Va(1073742336,t,t,[]),u.Va(1024,g.i,function(){return[[],[{path:"",component:f}]]},[])])})}}]);