import { useAppDispatch, useAppSelector } from "app/hooks";
import SearchPage from "components/pages/SearchPage";
import { searchItemActions, selectSearchItemList } from "features/searchItem/searchItemSlice";
import { search } from 'models';
import { useEffect } from "react";

export interface SearchLayoutProps {
  searchList: search[]
}

export default function SearchLayout({
  searchList

}: SearchLayoutProps) {
  const dispatch = useAppDispatch()
  const searchItemList = useAppSelector(selectSearchItemList)

  useEffect(() => {
    if (searchList) {
      searchList.forEach(item =>
        dispatch(searchItemActions.fetchSearchItemList(item.imdb_id))
      )
    }
  }, [searchList])



  return (
    <div>
      <SearchPage searchItemList={searchItemList} />
    </div>

  );
}