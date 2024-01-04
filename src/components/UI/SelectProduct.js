import { addItem } from "@/redux/features/selectComponent";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const SelectProduct = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickHandle = () => {
    dispatch(addItem(product));
    router.back();
  };

  const { selectedItems } = useSelector((state) => state.selectComponent);
  const selected = selectedItems?.find((item) => item._id === product._id);

  const outOfStock = product?.status === "Out of Stock";

  return (
    <div className="card bg-base-200 shadow-xl w-[400px] rounded">
      <figure>
        <Image
          src={product?.image}
          alt="image"
          height={500}
          width={500}
          className="h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {product?.name}</h2>
        <div className="flex justify-between items-center">
          <div className="badge badge-secondary">{product?.category}</div>
          <div className="p-4 flex items-center text-sm text-gray-600">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 fill-current ${
                  index + 1 <= Math.round(product?.rating)
                    ? "text-yellow-500"
                    : "text-gray-400"
                }`}
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
              </svg>
            ))}
            <span className="ml-1">{product?.rating}</span>
          </div>
        </div>
        <p>{product.description}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl">$ {product?.price}</p>
          <div
            className={`badge badge-sm ${
              outOfStock ? "badge-error" : "badge-success"
            }`}
          >
            {product?.status}
          </div>
        </div>
        {selected ? (
          <button disabled className="btn btn-full btn-primary">
            Selected
          </button>
        ) : (
          <button
            disabled={outOfStock}
            onClick={onClickHandle}
            className="btn btn-full btn-outline btn-success"
          >
            Select
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectProduct;
