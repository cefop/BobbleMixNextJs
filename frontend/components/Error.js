import { DisplayInfo } from '../components/styles/globalStyled';

export default function Error(props) {
    return (
        <DisplayInfo>
            <div>{props.tips}</div>
        </DisplayInfo>
    );
}
