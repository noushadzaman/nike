
const ShoeCard = ({ thumbnail, imgURL, changeBigShoeImg, bigShoeImg }) => {

    return (
        <div
            onClick={() => changeBigShoeImg(imgURL)}
            className={`border-2 rounded-xl ${bigShoeImg === imgURL ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={thumbnail}
                    alt="Shoe collection"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default ShoeCard;