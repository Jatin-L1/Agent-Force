import svgPaths from "./svg-eaw55b3a5d";
import imgAvatar from "figma:asset/c50aecc3d639d993708863451867f2935a00537d.png";

function Date() {
  return (
    <div className="h-[11.089px] relative shrink-0 w-[28.426px]" data-name="Date">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 12">
        <g id="Date">
          <g id="9:41">
            <path d={svgPaths.p1218b780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p25dc35c0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p38b62380} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3a930400} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Right() {
  return (
    <div className="h-[11.336px] relative shrink-0 w-[66.662px]" data-name="Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Right">
          <g id="Battery">
            <path d={svgPaths.p284dc240} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p3b01f0e0} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p11b4bf10} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.pc434800} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p28a9ed00} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Status Bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[18px] py-[12px] relative w-full">
          <Date />
          <Right />
        </div>
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Back icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Back icon">
          <path d={svgPaths.p16ebee00} fill="var(--fill-0, #9E9E9E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeaderTextContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center leading-[normal] min-h-px min-w-px relative shrink-0" data-name="Header text container">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#181a20] text-[18px] w-full">Threads</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#007aff] text-[14px] w-full">#general</p>
    </div>
  );
}

function FilePlus() {
  return (
    <div className="h-[24px] relative shrink-0 w-[22px]" data-name="file-plus 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 24">
        <g clipPath="url(#clip0_7_2064)" id="file-plus 1">
          <path d={svgPaths.p3fce3d80} id="Vector" stroke="var(--stroke-0, #5F5F5F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p33d72400} id="Vector_2" stroke="var(--stroke-0, #5F5F5F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16.2812 22.5V14.5" id="Vector_3" stroke="var(--stroke-0, #5F5F5F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12.2812 18.5H20.2812" id="Vector_4" stroke="var(--stroke-0, #5F5F5F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_7_2064">
            <rect fill="white" height="24" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Left Icon">
          <path d={svgPaths.p46aa600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#12b76a] content-stretch flex gap-[4px] h-full items-center justify-center px-[8px] py-[4px] relative rounded-[30px] shrink-0" data-name="Buttons">
      <LeftIcon />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-center text-nowrap text-white">1</p>
    </div>
  );
}

function IconAndHeadphonesContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Icon and headphones container">
      <FilePlus />
      <div className="flex flex-row items-center self-stretch">
        <Buttons />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[20px] items-center px-[18px] py-[10px] relative shrink-0 w-[440px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#ececec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <BackIcon />
      <HeaderTextContainer />
      <IconAndHeadphonesContainer />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <StatusBar />
      <Header />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_7_2052)" id="Icon">
          <path d={svgPaths.p2b114840} fill="var(--fill-0, #3F3F3F)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_2052">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#ececec] content-stretch flex items-center justify-center p-[10px] relative rounded-[10px] shrink-0" data-name="Buttons">
      <Icon />
    </div>
  );
}

function MessageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[normal] relative shrink-0 text-nowrap" data-name="Message Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#202020] text-[16px] text-right">A huddle happened</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#7e7e7e] text-[12px] text-center">Today at 14:05</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_7_2044)" id="Icon">
          <path d={svgPaths.p320ece40} fill="var(--fill-0, #3F3F3F)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_2044">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-[#d8d8d8] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[30px] shrink-0" data-name="Buttons">
      <Icon1 />
    </div>
  );
}

function MessageContent() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[350px]" data-name="Message Content">
      <MessageHeader />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#7e7e7e] text-[16px] w-[min-content]">You, jendoe 1 and jackdoe were in the huddle for 25 minutes.</p>
      <Buttons2 />
    </div>
  );
}

function MessageHeader1() {
  return (
    <div className="bg-[#ecf7ff] relative shrink-0 w-full" data-name="Message Header">
      <div aria-hidden="true" className="absolute border-[#ececec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex gap-[10px] items-start px-[18px] py-[20px] relative w-full">
          <Buttons1 />
          <MessageContent />
        </div>
      </div>
    </div>
  );
}

function BookmarkIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Bookmark Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_2041)" id="Bookmark Icon">
          <path d={svgPaths.p30054000} fill="var(--fill-0, #007AFF)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_2041">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Menu Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_7_2047)" id="Menu Icon">
          <path d={svgPaths.p3f9c4600} fill="var(--fill-0, #7E7E7E)" id="Vector" />
          <path d={svgPaths.p199aaa80} fill="var(--fill-0, #7E7E7E)" id="Vector_2" />
          <path d={svgPaths.p39840700} fill="var(--fill-0, #7E7E7E)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_7_2047">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="share 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="share 1">
          <path clipRule="evenodd" d={svgPaths.p31b66a00} fill="var(--fill-0, #9E9E9E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MessageOptions() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Message Options">
      <BookmarkIcon />
      <MenuIcon />
      <Share />
    </div>
  );
}

function MessageActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Actions">
      <div aria-hidden="true" className="absolute border-[#ececec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[18px] py-[20px] relative w-full">
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9e9e9e] text-[14px] text-nowrap">4 replies</p>
          <MessageOptions />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatar} />
    </div>
  );
}

function MessageHeader2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 text-nowrap" data-name="Message Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#202020] text-[18px] text-right">jsmith99</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#7e7e7e] text-[12px] text-center">13 mins</p>
    </div>
  );
}

function MessageContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] relative shrink-0 w-full" data-name="Message Content">
      <MessageHeader2 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3f3f3f] text-[16px] w-[min-content]">Discussion note:</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[6px] items-end leading-[0] relative shrink-0 text-[#3f3f3f] text-[16px] w-full" data-name="Container">
      <ul className="block relative shrink-0 w-full">
        <li className="leading-[normal] ms-[24px]">
          There’s an upcoming design conference in LA on this July, @<span className="font-['Outfit:Regular',sans-serif] font-normal">jsmith99</span>
          <span>{` to make a budget for attending this event.`}</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[normal]">Team hangout will be postponed due Townhall in the exact same week.</span>
        </li>
      </ul>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative self-stretch shrink-0 w-[350px]" data-name="Container">
      <MessageContent1 />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Avatar />
      <Container2 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatar} />
    </div>
  );
}

function MessageHeader3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 text-nowrap" data-name="Message Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#202020] text-[18px] text-right">jendoe1</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#7e7e7e] text-[12px] text-center">12 mins</p>
    </div>
  );
}

function MessageContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] relative self-stretch shrink-0 w-[350px]" data-name="Message Content">
      <MessageHeader3 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3f3f3f] text-[16px] w-[min-content]">{`Let's have the deadline of finishing the budget in tomorrow EOD 👀`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Avatar1 />
      <MessageContent2 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatar} />
    </div>
  );
}

function MessageHeader4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 text-nowrap" data-name="Message Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#202020] text-[18px] text-right">jsmith99</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#7e7e7e] text-[12px] text-center">9 mins</p>
    </div>
  );
}

function MessageContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] relative shrink-0 w-[350px]" data-name="Message Content">
      <MessageHeader4 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3f3f3f] text-[16px] w-[min-content]">I’ll let our head department know about this!</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Avatar2 />
      <MessageContent3 />
    </div>
  );
}

function NewMessageIndicator() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[32px] items-end relative shrink-0 w-full" data-name="New message indicator">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#de205d] text-[14px] text-nowrap text-right">NEW</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 404 1">
            <line id="Line 9" stroke="var(--stroke-0, #94455F)" x2="404" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MessageThread() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[404px]" data-name="Message Thread">
      <Container3 />
      <Container4 />
      <Container5 />
      <NewMessageIndicator />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatar} />
    </div>
  );
}

function MessageHeader5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 text-nowrap" data-name="Message Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[#202020] text-[18px] text-right">Jackdoe🏡</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[#7e7e7e] text-[12px] text-center">8 mins</p>
    </div>
  );
}

function MessageContent4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] relative self-stretch shrink-0 w-[350px]" data-name="Message Content">
      <MessageHeader5 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#3f3f3f] text-[16px] w-[min-content]">Anyway, just to note that we still have remaining</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-[404px]" data-name="Container">
      <Avatar3 />
      <MessageContent4 />
    </div>
  );
}

function MessageBody() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Message Body">
      <MessageActions />
      <MessageThread />
      <Container6 />
    </div>
  );
}

function MessageList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Message List">
      <MessageHeader1 />
      <MessageBody />
    </div>
  );
}

function MessagesContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Messages Container">
      <Container />
      <MessageList />
    </div>
  );
}

function AddIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Add icon">
          <path d={svgPaths.p11abbe00} fill="var(--fill-0, #5F5F5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddIconContainer() {
  return (
    <div className="bg-[#ececec] content-stretch flex items-center justify-center px-[2px] py-[4px] relative rounded-[26px] shrink-0 size-[37px]" data-name="Add icon container">
      <AddIcon />
    </div>
  );
}

function MessageInputContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Message input container">
      <AddIconContainer />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7e7e7e] text-[16px] text-nowrap text-right">Add a repluy</p>
    </div>
  );
}

function Mic() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Mic">
          <path d={svgPaths.p1f08cc00} id="Icon" stroke="var(--stroke-0, #7E7E7E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function MessageInput() {
  return (
    <div className="content-stretch flex h-[57px] items-center justify-between px-[20px] py-[10px] relative rounded-[16px] shrink-0 w-[404px]" data-name="Message input">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <MessageInputContainer />
      <Mic />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Content Container">
      <MessagesContainer />
      <MessageInput />
    </div>
  );
}

function HomeIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Home Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Home Icon">
          <path d={svgPaths.p11a73100} fill="var(--fill-0, #181A20)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Icon">
      <HomeIcon />
      <div className="relative shrink-0 size-[7px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(105, 64, 106, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <circle cx="3.5" cy="3.5" fill="var(--fill-0, #69406A)" id="Ellipse 6" r="3.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconAndLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-name="Icon and Label">
      <Icon2 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181a20] text-[12px] text-nowrap">Home</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[31px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 24">
        <g id="Icon">
          <g clipPath="url(#clip0_7_1667)" id="Message Icon">
            <path d={svgPaths.p2ddfb100} fill="var(--fill-0, #7E7E7E)" id="Vector" />
          </g>
          <circle cx="27.5" cy="3.5" fill="var(--fill-0, #69406A)" id="Ellipse 6" r="3.5" />
        </g>
        <defs>
          <clipPath id="clip0_7_1667">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconAndLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-name="Icon and Label">
      <Icon3 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7e7e7e] text-[12px] text-nowrap">DMs</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[31px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 24">
        <g id="Icon">
          <g id="notification-bing 1">
            <path d="M12 6.43994V9.76994" id="Vector" stroke="var(--stroke-0, #7E7E7E)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p26f227c0} id="Vector_2" stroke="var(--stroke-0, #7E7E7E)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p1e362580} id="Vector_3" stroke="var(--stroke-0, #7E7E7E)" strokeMiterlimit="10" strokeWidth="1.5" />
          </g>
          <circle cx="27.5" cy="3.5" fill="var(--fill-0, #69406A)" id="Ellipse 6" r="3.5" />
        </g>
      </svg>
    </div>
  );
}

function IconAndLabel2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-name="Icon and Label">
      <Icon4 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7e7e7e] text-[12px] text-nowrap">Activity</p>
    </div>
  );
}

function Tab() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between px-[18px] py-[12px] relative w-full">
          <IconAndLabel />
          <IconAndLabel1 />
          <IconAndLabel2 />
        </div>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="relative shrink-0 w-full" data-name="Home Indicator">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[143px] py-[8px] relative w-full">
          <div className="bg-[#202020] h-[6px] rounded-[5px] shrink-0 w-full" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function BottomNavigator() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bottom Navigator">
      <div aria-hidden="true" className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Tab />
      <HomeIndicator />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[440px]" data-name="Main Container">
      <ContentContainer />
      <BottomNavigator />
    </div>
  );
}

export default function HuddleReplies() {
  return (
    <div className="bg-white relative size-full" data-name="Huddle - Replies">
      <MainContainer />
    </div>
  );
}