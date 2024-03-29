import React from "react";
import styled from "@emotion/styled";
/**
 * `<LogIn>` ('Log in')
 * - [Open in Figma](https://figma.com/file/asUgXa0tsHsNH105i1oLCa?node-id=86:705)
 * - [Open in Grida](https://code.grida.co/files/asUgXa0tsHsNH105i1oLCa?node=86:705)
 * 
 * 
 * ---
 * @example
 * ```tsx
 * import React from "react";
 * 
 * export default function () {
 *   return (
 *     <>
 *       👇 instanciate widget like below. 👇
 *       <LogIn/>
 *     </>
 *   )
 * }
 * ```
 * ---
 * @params {any} props - this widget does not requires props. you can pass custom dynamic props to the widget as you want (on typescript, it will raise type check issues).
 * ---
 * @preview
 * ![](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7a18360-a6fb-4d71-bd31-7e4d852735d5)
 * ---
 * @remarks
 * @see {@link https://grida.co/docs} for more information.
 * ---
 * Code generated by grida.co | engine 0.0.1 (Apache-2.0) | Generated code under CC0 (public domain) *This code is free to use, modify, and redistribute. (aknowledgment is not required)*
 * 
 * 
 * ![Made with Grida](https://bridged-service-static.s3.us-west-1.amazonaws.com/branding/logo/32.png)
 * <!-- Info: Please do not remove this comment unless intended. removing this section will break grida integrations. -->
 * <!-- grida.meta.widget_declaration | engine : 0.0.1 | source : figma://asUgXa0tsHsNH105i1oLCa/86:705 -->
 */
export function LandingPageComponent() {

    function takeToLogin() {
        window.location.href = "/login";
    }

    function takeToSignup() {
        window.location.href = "/signup";
    }


  return (
    <RootWrapperLogIn>
      <Frame27>
        <Text>
          <br/>

        </Text>
        <Frame8>
          <Group20>
            <Rectangle10/>
            <SignUp>
              Sign up
            </SignUp>
          </Group20>
        </Frame8>
        <Frame21>
          <Rectangle1/>
          <CloudCar>
            CloudCar
          </CloudCar>
          <Group15>
            <Rectangle5/>
            <HowItWorks>
              How it works
            </HowItWorks>
          </Group15>
          <Group16>
            <Rectangle6/>
            <Locations>
              Locations
            </Locations>
          </Group16>
          <Group17>
            <Rectangle7/>
            <Frame18/>
          </Group17>
          <Group18>
            <Rectangle8/>
          </Group18>
          <Group19>
            <Rectangle9/>
          </Group19>
          <Group8 onClick={takeToLogin}>
            <Group5>
              <Rectangle11/>
            </Group5>
            <Group9>
              <User1/>
              <LogIn_0001>
                Log in
              </LogIn_0001>
            </Group9>
            <Frame7>
              <Group20_0001>
                <Group5>
                  <Rectangle11_0001/>
                </Group5>
                <Group9>
                  <User1/>
                  <LogIn_0001>
                    Log in
                  </LogIn_0001>
                </Group9>
              </Group20_0001>
            </Frame7>
          </Group8>
          <Rectangle12/>
          <Rectangle13/>
          <Wp27075774KCarWallpaper1/>
          <RentCarsNearYou>
            Rent Cars Near You
          </RentCarsNearYou>
          {/* <Rectangle24/> */}
          {/* <Line6/> */}
          {/* <LogInAsRenter>
            Log in as renter
          </LogInAsRenter>
          <LogInAsOwner>
            Log in as owner<br/>

          </LogInAsOwner> */}
          <Group19_0001>
            <Rectangle8_0001/>
            <AboutUs>
              About Us
            </AboutUs>
          </Group19_0001>
          <ConvenientHourlyAndDailyRentalsInsuranceIncluded>
            Convenient hourly and daily rentals. Insurance included. 
          </ConvenientHourlyAndDailyRentalsInsuranceIncluded>
          <Frame9>
            <Group20 onClick={takeToSignup}>
              <Rectangle10/>
              <SignUp>
                Sign up
              </SignUp>
            </Group20>
          </Frame9>
        </Frame21>
      </Frame27>
    </RootWrapperLogIn>
  )
}

const RootWrapperLogIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Frame27 = styled.div`
  min-height: 100vh; /* This ensures the div is at least the height of the viewport */
  width: 100vw; /* This ensures the div is at least the width of the viewport */
  position: relative; /* Changed from absolute to relative for responsiveness */
  max-width: 1440px; /* Max width for larger screens */
  margin: 0 auto; /* Center the content */
`;

const Text = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Inter, sans-serif;
	font-weight: 400;
	text-align: left;
	width: 69px;
	min-height: 21px;
	position: relative;
	left: 1285px;
	top: calc((calc((50% + -470px)) - 11px));
	height: 21px;
`;

const Frame8 = styled.div`
	width: 111px;
	height: 37px;
	position: relative;
	left: 1199px;
	top: 36px;
`;

const Group20 = styled.div`
	width: 111px;
	height: 37px;
	position: relative;
	left: 0px;
	top: 0px;
    cursor: pointer;
`;

const Rectangle10 = styled.div`
	width: 111px;
	height: 37px;
	background: rgb(0, 0, 0);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 19px;
	position: relative;
	left: 0px;
	top: 0px;
`;

const SignUp = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Urbanist, sans-serif;
	font-weight: 800;
	text-align: left;
	width: 100px;
	min-height: 20px;
	position: absolute;
	left: 23px;
	top: calc((calc((50% + 2px)) - 13px));
	height: 25px;
`;

const Frame21 = styled.div`
	width: 1440px;
	height: 1047px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Rectangle1 = styled.div`
	width: 1440px;
	height: 64px;
	background: rgb(57, 168, 161);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: absolute;
	left: 0px;
	top: 23px;
`;

const CloudCar = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Urbanist, sans-serif;
	font-weight: 800;
	text-align: left;
	width: 114px;
	min-height: 32px;
	position: absolute;
	left: 136px;
	top: calc((calc((50% + -469px)) - 16px));
	height: 32px;
`;

const Group15 = styled.div`
	width: 138px;
	height: 37px;
	position: absolute;
	left: 256px;
	top: 36px;
`;

const Rectangle5 = styled.div`
	width: 138px;
	height: 37px;
	background: rgb(57, 168, 161);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 19px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const HowItWorks = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Urbanist, sans-serif;
	font-weight: 800;
	text-align: left;
	width: 200px;
	min-height: 17px;
	position: absolute;
	left: 27px;
	top: calc((calc((50% + 0px)) - 9px));
	height: 17px;
`;

const Group16 = styled.div`
	width: 118px;
	height: 37px;
	position: absolute;
	left: 402px;
	top: 36px;
`;

const Rectangle6 = styled.div`
	width: 118px;
	height: 37px;
	background: rgb(57, 168, 161);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 19px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Locations = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Urbanist, sans-serif;
	font-weight: 800;
	text-align: left;
	width: 62px;
	min-height: 17px;
	position: absolute;
	left: 28px;
	top: calc((calc((50% + 0px)) - 9px));
	height: 17px;
`;

const Group17 = styled.div`
	width: 100px;
	height: 100px;
	position: absolute;
	left: 528px;
	top: 0px;
`;

const Rectangle7 = styled.div`
	width: 86px;
	height: 37px;
	background: rgb(57, 168, 161);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 19px;
	position: absolute;
	left: 0px;
	top: 36px;
`;

const Frame18 = styled.div`
	width: 100px;
	height: 100px;
	overflow: hidden;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Group18 = styled.div`
	width: 98px;
	height: 37px;
	position: absolute;
	left: 622px;
	top: 36px;
`;

const Rectangle8 = styled.div`
	width: 98px;
	height: 37px;
	background: rgb(57, 168, 161);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 19px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Group19 = styled.div`
	width: 166px;
	height: 37px;
	position: absolute;
	left: 728px;
	top: 37px;
`;

const Rectangle9 = styled.div`
	width: 166px;
	height: 37px;
	background: rgb(57, 168, 161);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 19px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Group8 = styled.div`
	width: 121px;
	height: 37px;
	position: absolute;
	left: 1069px;
	top: 36px;
    cursor: pointer;
`;

const Group5 = styled.div`
	width: 121px;
	height: 37px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Rectangle11 = styled.div`
	width: 121px;
	height: 37px;
	background: rgb(57, 168, 161);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 19px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Group9 = styled.div`
	width: 64px;
	height: 17px;
	position: absolute;
	left: 29px;
	top: 10px;
`;

const User1 = styled.div`
	width: 15px;
	height: 16px;
	background: url(https://s3-alpha-sig.figma.com/img/b0bf/c795/ba787cb4b4e8b0ab0700c27e53aff8a7?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GhNqxZRY84eqhw4Q9-iJOv12-Ih7GNW06B3C5XZkoEOg41NEsTEwy37M1G2CYagRqhLd7pg2BrhEDnZPNy3RANHW-pUdvMR7nCiIIG4o593u7Q5LEuavhDhGqEm7zYh2T4kGqEqHCSyjoM9aTq0a2vPr66W6x2rUpoR8Gu5gUMfa1svl-8K9pQSeHvwPMVgsznT~DX04rDSvxOsiXoULp0kGBw501nDWT9BQtcSd7jKSeWYht22U6Pk~dHMhEOvns-SspOz4Rh2F34oUuv4NLrWCmcVA6QJygCvamgufFYB-8S1ho6wVX74pBRxfptY~47IY83HiRz8BTHPhBe8xAg__);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	position: absolute;
	left: 0px;
	top: 1px;
`;

const LogIn_0001 = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Urbanist, sans-serif;
	font-weight: 800;
	text-align: left;
	width: 100px;
	min-height: 17px;
	position: absolute;
	left: 20px;
	top: calc((calc((50% + -0px)) - 9px));
	height: 17px;
`;

const Frame7 = styled.div`
	width: 121px;
	height: 37px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Group20_0001 = styled.div`
	width: 121px;
	height: 37px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Rectangle11_0001 = styled.div`
	width: 121px;
	height: 37px;
	background: rgb(255, 255, 255);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 19px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Rectangle12 = styled.div`
	width: 1440px;
	height: 960px;
	background: rgb(0, 0, 0);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: absolute;
	left: 0px;
	top: 87px;
`;

const Rectangle13 = styled.div`
	width: 1043px;
	height: 511px;
	background: rgb(217, 217, 217);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: absolute;
	left: 183px;
	top: 152px;
`;

const Wp27075774KCarWallpaper1 = styled.div`
	width: 100%;
	height: 100vh;
	background: url(https://s3-alpha-sig.figma.com/img/1bd7/d9ba/cf3121640ac1ab18517f74fbf8a79372?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=On3Cn7pMfziA2Ga66QQnYV9zBxK-qwJlQ62KHd5kr7MC-13V~FUG~-n9AyjrnAWqzVudqesFpE1a8chnUJIUYpl6aMDq0I~g5CsiJ6ca8BJ6LDYG2JhvAtQCSNzxVWn~u6pFfG2Sv0gj7Cy-arXJxzNKykc4yMy-RDdrYzWAol9lPQfdijtMvdclZH0HKghtfS4corKTfbwNXroTPqIUIeYvONGOfN22XMmzlHIdq~PVmZlY8W5Flv7jFWjrOEb~Qsgwzt3W8KbrLQEw1ZkGhXHfekth7vmYO~OC6ZtpOC1DgYWwUv~3vqK7mDX9NVxD-9tZfJxeab3U7Gsc6aWnvQ__);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	position: relative;
	left: 0px;
	top: 152px;
`;

const RentCarsNearYou = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 50px;
	font-family: Urbanist, sans-serif;
	font-weight: 800;
	text-align: left;
	width: 600px;
	min-height: 67px;
	position: absolute;
	left: 136px;
	top: 147px;
	height: 67px;
`;

const Rectangle24 = styled.div`
	width: 177px;
	height: 94px;
	background: rgb(66, 66, 66);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	position: absolute;
	left: 1069px;
	top: 87px;
`;

const Line6 = styled.div`
	width: 133px;
	height: 0px;
	border-top: solid 1px white;
	position: absolute;
	left: 1091px;
	top: 133px;
`;

const LogInAsRenter = styled.span`
	color: rgb(57, 168, 161);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Urbanist, sans-serif;
	font-weight: 700;
	text-align: left;
	width: 172px;
	min-height: 28px;
	position: absolute;
	left: 1091px;
	top: 101px;
	height: 28px;
`;

const LogInAsOwner = styled.span`
	color: rgb(165, 155, 155);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Urbanist, sans-serif;
	font-weight: 700;
	text-align: left;
	width: 172px;
	min-height: 28px;
	position: absolute;
	left: 1091px;
	top: 147px;
	height: 28px;
`;

const Group19_0001 = styled.div`
	width: 190px;
	height: 37px;
	position: absolute;
	left: 548px;
	top: 36px;
`;

const Rectangle8_0001 = styled.div`
	width: 98px;
	height: 37px;
	background: rgb(57, 168, 161);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 19px;
	position: absolute;
	left: 92px;
	top: 0px;
`;

const AboutUs = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Urbanist, sans-serif;
	font-weight: 800;
	text-align: left;
	width: 73px;
	min-height: 17px;
	position: absolute;
	left: 0px;
	top: calc((calc((50% + 1px)) - 9px));
	height: 17px;
`;

const ConvenientHourlyAndDailyRentalsInsuranceIncluded = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 17px;
	font-family: Urbanist, sans-serif;
	font-weight: 800;
	text-align: left;
	width: 442px;
	min-height: 47px;
	position: absolute;
	left: 138px;
	top: 208px;
	height: 47px;
`;

const Frame9 = styled.div`
	width: 111px;
	height: 37px;
	position: absolute;
	left: 1205px;
	top: 36px;
`;

