import svgPaths from "./svg-ypupaiqvcv";
import imgDownload1 from "figma:asset/c5120b0b306b95ec1fcd178720ad584265a38aac.png";
import imgAvatar from "figma:asset/3916ccca08c2b8bf4eba8462ad46f718dc1611d9.png";

function Date() {
  return (
    <div className="h-[11.089px] relative shrink-0 w-[28.426px]" data-name="Date">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 12">
        <g id="Date">
          <g id="9:41">
            <path d={svgPaths.p1218b780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p25dc35c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38b62380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3a930400} fill="var(--fill-0, white)" />
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
            <path d={svgPaths.p284dc240} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3b01f0e0} fill="var(--fill-0, white)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p11b4bf10} fill="var(--fill-0, white)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.pc434800} fill="var(--fill-0, white)" id="Wifi" />
          <path d={svgPaths.p28a9ed00} fill="var(--fill-0, white)" id="Mobile Signal" />
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

function LogoAndName() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Logo and Name">
      <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="download 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgDownload1} />
      </div>
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white">Intosoft</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="mr-[-10px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatar} />
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[10px] py-0 relative shrink-0" data-name="Profile Picture">
      <Avatar />
      <div className="mr-[-10px] relative shrink-0 size-[12px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(18, 183, 106, 1)", "--stroke-0": "rgba(68, 16, 69, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, #12B76A)" id="Ellipse 7" r="5" stroke="var(--stroke-0, #441045)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeaderTopRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Top Row">
      <LogoAndName />
      <ProfilePicture />
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Search Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_7_1712)" id="Search Icon">
          <path d={svgPaths.p3aa6d600} fill="var(--fill-0, #DACFDA)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_1712">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SearchInputContainer() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Search Input Container">
      <SearchIcon />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#dacfda] text-[16px] text-nowrap">Jump to or search...</p>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="basis-0 bg-[#69406a] grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Search Bar">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[16px] relative w-full">
          <SearchInputContainer />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_7_1703)" id="Icon">
          <path d={svgPaths.p7ba9200} fill="var(--fill-0, #DACFDA)" id="Vector" />
          <path d={svgPaths.p2cf18e00} fill="var(--fill-0, #DACFDA)" id="Vector_2" />
          <path d={svgPaths.p3f5b0c00} fill="var(--fill-0, #DACFDA)" id="Vector_3" />
          <path d={svgPaths.p393aefc0} fill="var(--fill-0, #DACFDA)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_7_1703">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#69406a] content-stretch flex items-center justify-center p-[10px] relative rounded-[16px] self-stretch shrink-0 w-[56px]" data-name="Buttons">
      <Icon />
    </div>
  );
}

function SearchBarContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Search Bar Container">
      <SearchBar />
      <Buttons />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[404px]" data-name="Header Content">
      <HeaderTopRow />
      <SearchBarContainer />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Header">
      <StatusBar />
      <HeaderContent />
    </div>
  );
}

function SectionItemIcons() {
  return (
    <div className="h-[24px] relative shrink-0 w-[31px]" data-name="Section Item Icons">
      <div className="absolute flex h-[23.573px] items-center justify-center left-[4px] top-[2px] w-[21.393px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[24.613deg]">
          <div className="bg-[#441045] h-[19.173px] relative rounded-[4px] w-[14.748px]" data-name="Icon 3">
            <div aria-hidden="true" className="absolute border-2 border-[#ece7ec] border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[21px] size-[7.954px] top-[4px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[24.613deg]">
          <div className="bg-[#7c587d] relative rounded-[5px] size-[6px]" data-name="Icon 2">
            <div aria-hidden="true" className="absolute border-2 border-[#ece7ec] border-solid inset-[-2px] pointer-events-none rounded-[7px]" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#441045] h-[19px] left-[3px] rounded-[4px] top-[8px] w-[14px]" data-name="Icon 1">
        <div aria-hidden="true" className="absolute border-2 border-[#ece7ec] border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function SectionItemTexts() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#441045] w-full" data-name="Section Item Texts">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[16px] w-full">Catch up</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">5 new</p>
    </div>
  );
}

function SectionItemContent() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[66px]" data-name="Section Item Content">
      <SectionItemIcons />
      <SectionItemTexts />
    </div>
  );
}

function SectionItem() {
  return (
    <div className="bg-[#ece7ec] content-stretch flex items-center px-[20px] py-[16px] relative rounded-[16px] shrink-0 w-[111px]" data-name="Section Item">
      <div aria-hidden="true" className="absolute border border-[#dacfda] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <SectionItemContent />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon 2">
          <path d={svgPaths.p10746800} fill="var(--fill-0, #441045)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SectionItemIcons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Section Item Icons">
      <Icon2 />
      <div className="absolute flex items-center justify-center left-[16px] size-[7.954px] top-px" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[24.613deg]">
          <div className="bg-[#7c587d] relative rounded-[5px] size-[6px]" data-name="Icon 1">
            <div aria-hidden="true" className="absolute border-2 border-[#ece7ec] border-solid inset-[-2px] pointer-events-none rounded-[7px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionItemTexts1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#441045] w-full" data-name="Section Item Texts">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[16px] text-nowrap">Threads</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]">1 mention</p>
    </div>
  );
}

function SectionItemContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[66px]" data-name="Section Item Content">
      <SectionItemIcons1 />
      <SectionItemTexts1 />
    </div>
  );
}

function SectionItem1() {
  return (
    <div className="bg-[#ece7ec] content-stretch flex items-center px-[20px] py-[16px] relative rounded-[16px] shrink-0 w-[111px]" data-name="Section Item">
      <div aria-hidden="true" className="absolute border border-[#dacfda] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <SectionItemContent1 />
    </div>
  );
}

function Headset() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="headset 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="headset 1">
          <path d={svgPaths.p3bfec770} fill="var(--fill-0, #441045)" id="primary" />
        </g>
      </svg>
    </div>
  );
}

function SectionItemTexts2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#441045] w-full" data-name="Section Item Texts">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[16px] text-nowrap">Huddles</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]">1 live</p>
    </div>
  );
}

function SectionItemContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[66px]" data-name="Section Item Content">
      <Headset />
      <SectionItemTexts2 />
    </div>
  );
}

function SectionItem2() {
  return (
    <div className="bg-[#ece7ec] content-stretch flex items-center px-[20px] py-[16px] relative rounded-[16px] shrink-0 w-[111px]" data-name="Section Item">
      <div aria-hidden="true" className="absolute border border-[#dacfda] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <SectionItemContent2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_7_1709)" id="Icon">
          <path d={svgPaths.p2c8d1200} fill="var(--fill-0, #3F3F3F)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_1709">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SectionItemTexts3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 text-[#3f3f3f] text-nowrap" data-name="Section Item Texts">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 text-[16px]">Later</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 text-[14px]">2 item</p>
    </div>
  );
}

function SectionItemContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0" data-name="Section Item Content">
      <Icon1 />
      <SectionItemTexts3 />
    </div>
  );
}

function SectionItem3() {
  return (
    <div className="bg-white content-stretch flex items-center px-[20px] py-[16px] relative rounded-[16px] shrink-0 w-[111px]" data-name="Section Item">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <SectionItemContent3 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[404px]" data-name="Section">
      <SectionItem />
      <SectionItem1 />
      <SectionItem2 />
      <SectionItem3 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="mr-[-10px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatar} />
    </div>
  );
}

function ProfilePicture1() {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[10px] py-0 relative shrink-0" data-name="Profile Picture">
      <Avatar1 />
      <div className="mr-[-10px] relative shrink-0 size-[12px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(18, 183, 106, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, #12B76A)" id="Ellipse 7" r="5" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UnreadDmContent() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0" data-name="Unread DM Content">
      <ProfilePicture1 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181a20] text-[16px] text-nowrap">jendow1 🎧</p>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#69406a] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Buttons">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white">2</p>
    </div>
  );
}

function UnreadDmItem() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Unread DM Item">
      <UnreadDmContent />
      <Buttons1 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="mr-[-10px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgAvatar} />
    </div>
  );
}

function ProfilePicture2() {
  return (
    <div className="content-stretch flex items-end pl-0 pr-[10px] py-0 relative shrink-0" data-name="Profile Picture">
      <Avatar2 />
      <div className="mr-[-10px] relative shrink-0 size-[12px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(18, 183, 106, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, #12B76A)" id="Ellipse 7" r="5" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UnreadDmContent1() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0" data-name="Unread DM Content">
      <ProfilePicture2 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181a20] text-[16px] text-nowrap">jackdoe 🏡</p>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-[#69406a] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Buttons">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white">1</p>
    </div>
  );
}

function UnreadDmItem1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Unread DM Item">
      <UnreadDmContent1 />
      <Buttons2 />
    </div>
  );
}

function UnreadDMsList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[83px] items-start relative shrink-0 w-full" data-name="Unread DMs List">
      <UnreadDmItem />
      <UnreadDmItem1 />
    </div>
  );
}

function UnreadDMsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[404px]" data-name="Unread DMs Container">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181a20] text-[16px] text-nowrap">Unread DMs</p>
      <UnreadDMsList />
    </div>
  );
}

function MentionsToggle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Mentions Toggle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Mentions Toggle">
          <path d={svgPaths.p35d5c400} fill="var(--fill-0, #7E7E7E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MentionsHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Mentions Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181a20] text-[16px] text-nowrap">Mentions</p>
      <MentionsToggle />
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lock 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lock 1">
          <path d={svgPaths.p22dd2080} fill="var(--fill-0, #181A20)" id="Vector" />
          <path d={svgPaths.p3fbcdf00} fill="var(--fill-0, #181A20)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MentionItem() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0" data-name="Mention Item">
      <Lock />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181a20] text-[16px] text-nowrap">landingpage-redesign</p>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="bg-[#69406a] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Buttons">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white">2</p>
    </div>
  );
}

function MentionsList() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Mentions List">
      <MentionItem />
      <Buttons3 />
    </div>
  );
}

function MentionsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[404px]" data-name="Mentions Container">
      <MentionsHeader />
      <MentionsList />
    </div>
  );
}

function UnreadToggle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Unread Toggle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Mentions Toggle">
          <path d={svgPaths.p35d5c400} fill="var(--fill-0, #7E7E7E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UnreadHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Unread Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181a20] text-[16px] text-nowrap">Unread</p>
      <UnreadToggle />
    </div>
  );
}

function UnreadIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Unread Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_7_1720)" id="Unread Icon">
          <path d={svgPaths.p16f9f400} fill="var(--fill-0, #181A20)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_1720">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UnreadItemContent() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0" data-name="Unread Item Content">
      <UnreadIcon />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181a20] text-[16px] text-nowrap">ux-workshop</p>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="bg-[#69406a] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Buttons">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white">2</p>
    </div>
  );
}

function UnreadItem() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Unread Item">
      <UnreadItemContent />
      <Buttons4 />
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Left Icon">
          <path d={svgPaths.p2a5f5800} fill="var(--fill-0, #7E7E7E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Buttons">
      <LeftIcon />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7e7e7e] text-[16px] text-nowrap">Add channel</p>
    </div>
  );
}

function UnreadList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Unread List">
      <UnreadItem />
      <Buttons5 />
    </div>
  );
}

function UnreadContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[404px]" data-name="Unread Container">
      <UnreadHeader />
      <UnreadList />
    </div>
  );
}

function ChannelsToggle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Channels Toggle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Mentions Toggle">
          <path d={svgPaths.p35d5c400} fill="var(--fill-0, #7E7E7E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChannelsHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Channels Header">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181a20] text-[16px] text-nowrap">Channels</p>
      <ChannelsToggle />
    </div>
  );
}

function ChannelIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Channel Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_7_1677)" id="Channel Icon">
          <path d={svgPaths.p16f9f400} fill="var(--fill-0, #5F5F5F)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_1677">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChannelItem() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0" data-name="Channel Item">
      <ChannelIcon />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5f5f5f] text-[16px] text-nowrap">general</p>
    </div>
  );
}

function Headset1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="headset 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="headset 1">
          <path d={svgPaths.pb2e3a80} fill="var(--fill-0, white)" id="primary" />
        </g>
      </svg>
    </div>
  );
}

function Buttons6() {
  return (
    <div className="bg-[#039855] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Buttons">
      <Headset1 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white">2</p>
    </div>
  );
}

function ChannelsList() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Channels List">
      <ChannelItem />
      <Buttons6 />
    </div>
  );
}

function ChannelsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[404px]" data-name="Channels Container">
      <ChannelsHeader />
      <ChannelsList />
    </div>
  );
}

function SectionsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Sections Container">
      <Section />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(236, 236, 236, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1">
            <line id="Line 5" stroke="var(--stroke-0, #ECECEC)" x2="440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <UnreadDMsContainer />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(236, 236, 236, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1">
            <line id="Line 5" stroke="var(--stroke-0, #ECECEC)" x2="440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <MentionsContainer />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(236, 236, 236, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1">
            <line id="Line 5" stroke="var(--stroke-0, #ECECEC)" x2="440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <UnreadContainer />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(236, 236, 236, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1">
            <line id="Line 5" stroke="var(--stroke-0, #ECECEC)" x2="440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ChannelsContainer />
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

function Icon3() {
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
      <Icon3 />
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#181a20] text-[12px] text-nowrap">Home</p>
    </div>
  );
}

function Icon4() {
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
      <Icon4 />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7e7e7e] text-[12px] text-nowrap">DMs</p>
    </div>
  );
}

function Icon5() {
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
      <Icon5 />
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

function MainContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[440px]" data-name="Main Content Container">
      <SectionsContainer />
      <BottomNavigator />
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-white content-stretch flex items-end pb-0 pt-[20px] px-0 relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full" data-name="Main Content">
      <MainContentContainer />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[956.336px] items-start justify-between left-0 top-0 w-[440px]" data-name="Container">
      <Header />
      <MainContent />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="edit 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="edit 1">
          <path clipRule="evenodd" d={svgPaths.p15fc0df0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons7() {
  return (
    <div className="absolute bg-[#441045] content-stretch flex items-center justify-center left-[351px] p-[10px] rounded-[30px] size-[55px] top-[740px]" data-name="Buttons">
      <Edit />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#441045] relative size-full" data-name="Home">
      <Container />
      <Buttons7 />
    </div>
  );
}