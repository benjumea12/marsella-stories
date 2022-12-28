import React from "react"
// Styled components
import { Main } from "./SVGMap.styled"
import { motion } from "framer-motion"

interface SVGMapProps {}

const SVGMap = () => {
  const color = "#96CEB3"
  const strokeWidth = 2

  const icon = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
    },
  }

  const transition = {
    delay: 1,
    duration: 2,
  }
  return (
    <Main>
      <motion.svg
        width="1480"
        height="929"
        viewBox="0 0 1480 929"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M969.5 510L999.5 514M969.5 526L996 530.5M1017 494L1020.5 479"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M559.5 496.5L648.5 512.5H696.5L705.5 519.5L721.5 525.5H741L748.5 519.5L848 530.601M869.5 533L848 530.601M859 481L848 530.601"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M844.5 583.5L853 532.5M793 578.5L800 526.5L834 283M740.5 526.5L736 567M704 517.5L694.5 562.5M638.5 557.5L642.5 512.5L653 456.5M594 503L600 449M694.5 512.5L704 461M750.5 517.5L782.5 283"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M732 251.5L712 414L703 462M653 451.5L663.368 383M623 399L627.5 378L628.583 373.5M628.583 373.5L634 351L653 333.5L662 324.5L672 351L667 359L663.368 383M628.583 373.5L663.368 383"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M635.5 353H666M560.5 348.5L550.5 451.5M502.5 385.5L499 411L502.5 438M449 430V379L466 242.5M671.5 353L719.5 362.5L768 366L821.5 369.5L881 379L1001 394.91M1103.5 408.5L1089 406.578M1089 406.578L1111 326M1089 406.578L1039.5 400.015M1001 394.91L1029.5 436.5L1039.5 400.015M1001 394.91L1039.5 400.015"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M877 433.5L873 429L877 378.5L887.5 329L899 274V255L913 237.5H945.5L956 220.5M920 284H949.5L1023 303.5M949.5 288.5L935.5 363.5L930 386.5"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M725.5 306L778 315.5L830 320.5L915 333.597M989 345L915 333.597M915 333.597L909 382M931.5 386.5L927.5 437M767 391L816 396M607.5 396L600.5 452M901 486L894 536.5M925 489L918 539M946.5 493.5L940 539M955.5 544L946.5 619"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M301 2C292.5 7.5 273.4 22 265 36C256.6 50 256.833 80.5 258 94C258 105.333 256.6 131.7 251 146.5C244 165 278.5 234 279.5 235.5C280.3 236.7 317.833 263.667 336.5 277C347.5 286.167 370 305.4 372 309C374.5 313.5 400 371 423.5 374C442.3 376.4 732 412 874.5 429.5"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M2 423.5L12 418.5L62.5 423.5C75.1667 414.5 106.3 398.7 129.5 407.5C152.7 416.3 172.167 421.833 179 423.5L203 391C207.333 389.167 219.4 388.3 233 399.5C250 413.5 253 407 252 385C251.2 367.4 278 358.333 291.5 356L331.5 350C349.833 351.667 389.9 357.4 403.5 367C417.1 376.6 429.5 376.333 434 375"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M146 648V674L162 688H219.5L385.5 648L405.5 654.5L434.5 648C453.667 656.5 501.2 669.7 538 654.5C547.667 655.333 568.3 653.8 573.5 641C580 625 578 604.5 629 609.5C669.8 613.5 715.667 618.167 733.5 620"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M536 926.5C568 927 633.4 911.9 639 847.5C639 810 638 797.5 653 767.5C665 743.5 666.667 708.5 666 694C664.333 688.333 670.3 672.9 707.5 656.5C754 636 801.5 613.5 820.5 616.5C839.5 619.5 864 586.5 867 558.5C869.4 536.1 878 468.333 880 435L980 440.5H1043L1078 464C1105.83 466.167 1158.6 460.9 1147 422.5C1143.5 416.167 1140.1 401.3 1154.5 392.5C1172.5 381.5 1186.5 356 1234.5 386C1272.9 410 1285.5 385 1287 369.5C1290.83 362.167 1306.7 346.9 1339.5 344.5C1372.3 342.1 1372.17 316.167 1368 303.5L1339.5 278L1368 231L1399.5 202.5L1406 178C1421.5 171.833 1443.2 155.1 1406 137.5C1389.2 127.1 1419 105.167 1436 95.5L1467 73.5C1475 67.1667 1486.2 44 1467 2M707.5 2C702.333 6 686.5 12.8 664.5 8C657.667 9.66667 638.9 29.5 618.5 95.5C615.5 100.333 615 116.8 637 144C659 171.2 676.833 202.333 683 214.5L782.5 284"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M1287 0C1292 8.5 1295.8 31 1271 53C1246.2 75 1247.67 119.833 1251.5 139.5C1254 146 1248.2 161.8 1205 173L1168 199.5L1050.5 233C1039.67 235.667 1016.6 243.8 1011 255C1005.4 266.2 1001.67 291.333 1000.5 302.5L989 348.5L972 440"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M607 153.5C613.167 162.5 634.5 182.9 670.5 192.5M690 218V199.5L705 177.5L732.5 153.5L738.5 123.5L720 117.5M720 117.5V136M720 117.5L732.5 99L720 87.5L705 106L706 130.5"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M753.5 131.5L760.5 120V80.5V62M753.5 131.5L739.5 124V90L744 73.5L739.5 48.8362M753.5 131.5L751 159L733 163V153.5M720 87.5L739.5 48.8362M749 30L739.5 48.8362M739.5 48.8362L760.5 62M760.5 62L772.5 30"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M706 182L710 188L715.5 212.5L736.5 228L747.5 233.5L763 259.5L783.5 267V284M786.5 621.5L769 749.5V767.5L777.5 781.5V806.5V832L774 851.5L765.5 861.5L763.5 875.5L765.5 892.5L780 927"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M778 827L799 824M799 824L812 815.5L821.5 817.5M799 824L805 849M821.5 817.5L832.5 811V802M821.5 817.5V830L805 849M805 849L778 858M805 849L812 880L789.5 893.5L778 858M778 858L772 854.5"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M784.5 876L808.5 864.5M812 879L819 891M729.5 860.5H756M756 860.5H766M756 860.5L758.509 832M763 781H779M763 781L758.509 832M763 781L715.5 775M763 781L768.5 767M779 781L781 759.5L787.5 756H790M779 781H799M799 781H819V756H812M799 781V756M799 756H790M799 756H812M790 756V732M790 732L772 729.5M790 732L819 734.578M835 736L819 734.578M812 756L819 734.578M819 734.578L835 631.5M781 655.5L851 665M779 680.5L857.5 689M774.5 709.5L739.5 704M758.509 832H777M758.509 832L709.5 827M706.5 866.5L715.5 775M715.5 775L719.5 723L731.5 646"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M771.5 729.5L719 725.5L665.5 713.5M715.5 771.5L653.5 767L632.5 757.5L614.5 755M705 658L709.5 668.5L727.5 672.5L779.5 679.5M634.5 609L614.5 755M614.5 755L607.5 763.5L588.5 759.5"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M666 717.5L635 711.5L569 705.5M569 705.5L528.5 699.5L525.5 696M569 705.5L564.5 742L556 747H547.5L543.5 742L508 731.5M538.5 654.5L528.5 682.5L522.5 692.5L525.5 696M525.5 696L516 711.5L508 731.5M508 731.5L472 705.5V696"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M550 702.5L547.25 722M544.5 741.5L547.25 722M515 717.5L547.25 722M488 660.5L485.5 671L478.5 686L504 704.514M515 712.5L504 704.514M521.5 660.5L518.5 676L504 704.514"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M504.5 661L501.5 675.5L492 695.5M628 660L675 671L682 615L694.5 564.5M730 645V620.5M730 620.5H787.5M730 620.5L743 572M599 551.5L605 556L735.5 568.5L743 572M743 572L843.5 583.5L855.5 589"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M793 578.5L787.5 622.5M637 559.5L634 610.5"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M434 437.5L450.5 431.5L499.5 437.5L550 443L875 482L903.5 485.581M970.5 494L965.5 541L953.5 545L868.5 532.5M970.5 494L980.5 440M970.5 494L903.5 485.581M909 440L903.5 485.581"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M905.5 461L950 466.5M950 466.5L953 439.5M950 466.5L946.5 491"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={transition}
          d="M971 480.5L994 483.75M1017 487L994 483.75M998 465L994 483.75"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </motion.svg>
    </Main>
  )
}

export default SVGMap
