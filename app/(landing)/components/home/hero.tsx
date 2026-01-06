import Image from "next/image";
import { FiFastForward } from "react-icons/fi";

import Button from "../ui/button";

const HeroSection = () => {
	return (
		<section id="hero-section" className="container mx-auto h-screen flex">
			<div className="relative self-center flex">
				<Image
					src="/images/basketball.png"
					alt="Basketball image"
					width={432}
					height={423}
					className="grayscale absolute left-0 -top-20"
				/>
				<div className="relative w-full ml-40">
					<div className="text-primary italic py-3 px-8 bg-primary/10 w-fit rounded-full">
						Friday Sale, 50%
					</div>
					<h1 className="font-extrabold text-[95px] leading-tight italic bg-linear-to-b from-black to-[#CBCBCB] bg-clip-text text-transparent">
						WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
					</h1>
					<p className="text-base w-1/2 mt-10 leading-loose">
						Engineered for endurance and designed for speed. Experience gear
						that moves as fast as you do. Premium fabrics. Unmatched comfort.
						Limitless motion.
					</p>
					<div className="flex gap-5 mt-14">
						<Button>
							Explore More <FiFastForward />
						</Button>

						<Button variant="ghost">
							Watch Video{" "}
							<Image
								src="/images/icon-play-video.svg"
								alt="icon play"
								width={29}
								height={29}
							/>{" "}
						</Button>
					</div>
				</div>

				<Image
					src="/images/img-hero.png"
					alt="hero image"
					width={700}
					height={950}
					className="absolute -right-5 top-1/2 -translate-y-1/2"
				/>
			</div>

			<Image
				src="/images/img-ornament-hero.svg"
				alt="hero ornament"
				width={420}
				height={420}
				className="absolute -right-50 translate-y-1/2"
			/>
		</section>
	);
};

export default HeroSection;
