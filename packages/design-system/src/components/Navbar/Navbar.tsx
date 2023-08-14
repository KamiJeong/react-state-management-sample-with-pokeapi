import { ReactNode } from 'react';
import tx from 'twin.macro';

type Menu = {
	id: string;
	label: string;
	onClick?: () => void;
};

type NavbarProps = {
	logo: ReactNode;
	menus?: (Menu & { children?: Menu[] })[];
};

const Navbar = ({ logo, menus }: NavbarProps) => (
	<div css={[tx`navbar bg-base-100`]}>
		<div css={[tx`flex-1`]}>
			<a css={[tx`btn btn-ghost text-xl normal-case`]}>{logo}</a>
		</div>
		<div css={[tx`flex-none`]}>
			<ul css={[tx`menu menu-horizontal px-1`]}>
				{(menus || []).map(({ id, label, onClick, children }) => {
					if (children) {
						return (
							<li key={id}>
								<details>
									<summary>{label}</summary>
									<ul css={[tx`bg-base-100 p-2`]}>
										{children.map(({ id, label, onClick }) => (
											<li key={id}>
												<a
													onClick={(e) => {
														e.preventDefault();
														onClick?.();
													}}
												>
													{label}
												</a>
											</li>
										))}
									</ul>
								</details>
							</li>
						);
					}
					return (
						<li key={id}>
							<a
								onClick={(e) => {
									e.preventDefault();
									onClick?.();
								}}
							>
								{label}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	</div>
);

Navbar.defaultProps = {
	menus: [],
};

export default Navbar;
