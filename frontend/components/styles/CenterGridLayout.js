import styled from '@emotion/styled';

export default function CenterGridLayout(props) {
    const { title, subtitle, background, data } = props;

    const MainLayout = styled.div`
        /* border: 1px solid teal; */
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
        height: fit-content;
        text-align: center;
        align-self: top;
        justify-self: center;
        background-image: ${background !== undefined && `url(${background})`};
        background-size: 38%;
        background-position: -110px 220px;
        background-repeat: no-repeat;
        z-index: 1;
    `;

    const CenterContainer = styled.div`
        /* border: 1px solid red; */
    `;

    const RecipeTitle = styled.div`
        /* border: 1px solid cyan; */
        height: 147px;
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: grid;
        grid-template-rows: auto auto;

        .title {
            /* border: 1px solid pink; */
            width: 34%;
            align-self: flex-end;
            justify-self: start;
            text-align: end;
            text-transform: uppercase;
            font-size: 3.5em;
            font-weight: 700;
        }
        .subtitle {
            /* border: 1px solid pink; */
            width: 34%;
            align-self: flex-start;
            justify-self: start;
            text-align: end;
            text-transform: lowercase;
            font-size: 1.25em;
            font-weight: 400;
        }
    `;

    const RecipePanel = styled.div`
        /* border: 1px solid violet; */
        display: grid;
        align-self: top;
        justify-self: center;
        justify-items: center;
    `;

    const RecipeView = styled.div`
        /* border: 4px solid green; */
        display: grid;
        grid-template-rows: 9rem auto 1fr;
        border-top-right-radius: 34px;
        border-top-left-radius: 34px;
        background: white;
        color: #1d1d1b;
        width: 78%;
        height: calc(100vh - 75px - 147px);
        overflow: auto;
        position: relative;
        ::-webkit-scrollbar {
            width: 0px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: transparent;
        }
        ::-webkit-scrollbar-track-piece {
        }
    `;

    return (
        <MainLayout>
            <CenterContainer>
                <RecipeTitle>
                    {title && <div className="title">{title}</div>}
                    {subtitle && <div className="subtitle">{subtitle}</div>}
                </RecipeTitle>
                <RecipePanel>
                    <RecipeView>{data && props.children}</RecipeView>
                </RecipePanel>
            </CenterContainer>
        </MainLayout>
    );
}
