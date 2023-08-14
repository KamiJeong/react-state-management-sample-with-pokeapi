import tx from 'twin.macro';

type CardProps = {
	img?: string;
	name?: string;
	description?: string;
	isCollected?: boolean;
	noActions?: boolean;
	onCatch?: () => void;
};

const Card = ({ img, name, description, isCollected, noActions, onCatch }: CardProps) => (
	<div css={[tx`card w-96 bg-base-100 shadow-xl bg-primary`]}>
		<figure>
			<img src={img} alt={name} width={96} height={96} />
		</figure>
		<div css={[tx`card-body`]}>
			<h2 css={[tx`card-title`]}>{`${name}!`}</h2>
			<p>{description}</p>
			{!noActions && (
				<div css={[tx`card-actions justify-end`]}>
					{!isCollected && (
						<button type="button" css={[tx`btn btn-primary`]} onClick={onCatch}>
							Catch!
						</button>
					)}
				</div>
			)}
		</div>
	</div>
);

Card.defaultProps = {
	img: 'https://placehold.co/200x200?text=No+Image',
	name: 'un-known',
	description: 'no info!',
	isCollected: false,
	noActions: false,
};

export default Card;
