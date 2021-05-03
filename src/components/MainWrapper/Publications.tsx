import { FC } from 'React';
import styled from 'styled-components';

import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper2 = styled(PageElements)`
    height: 40vh;
`;

// const GetPost: FC = () => {
//     return (
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => {return json.id})
//         .catch(err=> console.error(err))
//     );
// }

export const Publications: FC = () => {
    return (
            <Wrapper2>
               {/* <GetPost></GetPost>  */}
            </Wrapper2>
    );
};