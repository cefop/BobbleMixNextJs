import FdsLayout from '../components/Fds/index';

export default function Fds() {
    const juice = [
        {
            id: 20,
            name: 'Mangue',
            vol: 20,
        },
        {
            id: 30,
            name: 'Fraise',
            vol: 20,
        },
    ];
    return <FdsLayout juice={juice} />;
}
