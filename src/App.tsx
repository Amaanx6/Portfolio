import { lazy, Suspense } from "react";
import { RecoilRoot } from "recoil"; // Import RecoilRoot
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <RecoilRoot> {/* Wrap the app inside RecoilRoot */}
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </RecoilRoot>
  );
};

export default App;
