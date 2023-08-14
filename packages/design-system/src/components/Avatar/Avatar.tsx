import tw from 'twin.macro';

type AvatarProps = {
	img?: HTMLImageElement['src'];
};

const Avatar = ({ img }: AvatarProps) => (
	<div css={[tw`avatar`]}>
		<div css={[tw`w-24 rounded bg-black`]}>
			<img src={img} alt="" />
		</div>
	</div>
);

Avatar.defaultProps = {
	img: 'https://placehold.co/200x200?text=No+Image',
};

export default Avatar;
