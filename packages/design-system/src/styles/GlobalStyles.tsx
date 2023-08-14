import { Global, css } from '@emotion/react';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';
import { Fragment } from 'react';

const customStyles = css`
	body {
		-webkit-tap-highlight-color: ${theme`colors.purple.500`};
		${tw`antialiased`}
	}
`;

const GlobalStyles = () => (
	<Fragment>
		<BaseStyles />
		<Global styles={customStyles} />
	</Fragment>
);

export default GlobalStyles;
