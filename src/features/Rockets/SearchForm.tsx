import { Select } from 'antd';

export interface ISearchProps{
    filterActiveRockets: (isActive: boolean) => void
}

const SearchForm = ({filterActiveRockets}: ISearchProps) => {
    return (
        <div className='search-box' data-testid="search-box">
            <p style={{ color: '#6666' }}>Filters</p>
            <div style={{ padding: '0 10px', marginBottom: 10 }}>
                <small data-testid="active-label">Active</small>
                <Select
                data-testid="select-hit"
                    style={{ width: '100%' }}
                    allowClear
                    options={[{ value: true, label: 'Yes' }, { value: false, label: 'No' }]}
                    onChange={filterActiveRockets}
                />
            </div>
        </div>
    );
};

export default SearchForm;