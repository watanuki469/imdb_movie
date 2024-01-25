import { singleStar } from 'models';

export interface SingleStarItemProps {
    singleList: singleStar[];
    num:number
}
export default function SingleStarItemPage({
    singleList,
    num
}: SingleStarItemProps) {
    
    return (
        <div>
        {singleList[num % singleList.length] && (
          <img
            src={singleList[num % singleList.length]?.image_url}
            style={{ height: '200px' }}
            alt={`Star ${num}`}
          />
        )}
      </div>
     
    );
}