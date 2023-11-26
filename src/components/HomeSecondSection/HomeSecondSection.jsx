import React from "react";
import "./HomeSecondSection.css";

function HomeSecondSection() {
	return (
		<section className="second-section">
			<div className="first-section-content">
				<div className="second-logo-container">
					<img src="/assets/M-LAB_LOGO_PNG.png" alt="logo" />
				</div>
				<h2 className="second-title">Cras congue quis ligula a accumsan.</h2>
				<p>
					Fusce id cursus nisi, id fringilla nisl. Nam tempus porttitor ante.
					Proin at varius mauris. Ut nibh elit, placerat quis mi id, scelerisque
					convallis diam. Cras congue quis ligula a accumsan.
				</p>
			</div>
			<div className="second-section-content">
				<div className="content-image-container">
					<img src="/assets/E1.jpg" alt="pic" />
				</div>
				<div className="content">
					<h2>About US</h2>
					<p className="desc">
						Proin at volutpat eros, quis tincidunt ligula. Class aptent taciti
						sociosqu ad litora torquent per conubia nostra, per inceptos
						himenaeos. Ut auctor nunc pellentesque justo rutrum, ac tincidunt mi
						pretium. Vestibulum vulputate dictum congue. Nullam mattis, quam sed
						dignissim sagittis, dui nisl egestas augue, a euismod turpis purus
						ut tellus. Vestibulum ornare porta elit, quis bibendum odio
						hendrerit mattis. Vivamus semper neque ex, sed varius enim bibendum
						in. Cras mattis nec urna ultricies gravida. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Pellentesque eros ligula, fermentum ac velit sit amet, dapibus
						condimentum purus. Aenean cursus mauris vel tempus tempor. Cras nec
						odio sit amet magna tincidunt venenatis. Sed ultrices vitae est quis
						rhoncus. Curabitur ultricies tincidunt justo eu convallis. Vivamus
						nec leo dapibus, ornare turpis vel, porta nulla. Vestibulum sit amet
						elementum nisl, in rhoncus ante. Aenean quis sollicitudin libero, at
						pretium est. Curabitur accumsan orci id auctor molestie. Etiam leo
						mi, scelerisque finibus sodales sit amet, gravida ac quam. Proin
						porttitor nibh iaculis, semper nulla ut, fermentum ex. Curabitur
						mattis purus ac auctor ornare. Fusce id cursus nisi, id fringilla
						nisl. Nam tempus porttitor ante. Proin at varius mauris. Ut nibh
						elit, placerat quis mi id, scelerisque convallis diam. Cras congue
						quis ligula a accumsan. Nulla ultricies auctor libero, tristique
						interdum sem aliquam vel. Quisque urna est, lacinia nec faucibus
						tincidunt, volutpat et mauris. Cras posuere est arcu. Class aptent
						taciti sociosqu ad litora torquent per conubia nostra, per inceptos
						himenaeos. Donec orci sapien, tristique ac lorem eget, tincidunt
						volutpat lorem...{" "}
						<a href="/" className="more">
							Read More
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}

export default HomeSecondSection;
