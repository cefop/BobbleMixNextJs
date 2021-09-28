import styled from '@emotion/styled';

export default function PageLayout(props) {
    const Title = styled.div`
        text-align: center;
        font-size: 2rem;
        padding-bottom: 2rem;
    `;

    const UserLayout = styled.div`
        display: grid;
        /* background: white; */
        border: 1px solid grey;
        border-radius: 5px;
        margin: 3rem 5rem;
        padding: 3rem 5rem;
        padding-bottom: 9rem;
        justify-content: center;
        align-content: center;
        /* color: black; */
    `;

    return (
        <UserLayout>
            <Title>{props.title}</Title>
            {props.children}
        </UserLayout>
    );
}
