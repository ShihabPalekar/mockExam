import "./pagination.css";

type Props = {
  data: any;
};

const Pagination: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="pagination-wrapper"> 
      {props.data.map((item: any) => {
        return <p>{props.data.indexOf(item) + 1}</p>;
      })}
    </div>
  );
};

export default Pagination;
