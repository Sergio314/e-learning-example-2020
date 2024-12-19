// Based on https://scorm.com/scorm-explained/technical-scorm/run-time/api-discovery-algorithms/

type ScormWindow = Window & { API_1484_11: string };
interface API {
  Initialize: (value: string) => {};
  GetValue: (value: string) => string;
  SetValue: (element: string, value: string) => string;
}

const getScormAPI = () => {
  const win = window;

  let nFindAPITries = 0;
  let API: API | null = null;
  const maxTries = 500;

  const ScanForAPI = (win: ScormWindow) => {
    while (
      win?.API_1484_11 == null &&
      win?.parent != null &&
      win?.parent !== win
    ) {
      nFindAPITries++;
      if (nFindAPITries > maxTries) {
        return null;
      }
      win = win.parent as ScormWindow;
    }
    return win?.API_1484_11 as unknown;
  };

  if (win.parent !== null && win.parent !== win) {
    API = ScanForAPI(win.parent as ScormWindow) as API;
  }

  if (API === null && win.opener !== null) {
    API = ScanForAPI(win.opener) as API;
  }

  API?.Initialize('');

  return API;
};

export const getScormLearner = () => '123123qweqwe';

export const setScormData = (data: {
  scoreRaw: string;
  scoreMin: string;
  scoreMax: string;
  scoreSuccessStatus: string;
  completionStatus: string;
}) => {
  const scormAPI = getScormAPI();
  const { scoreRaw, scoreMin, scoreMax, scoreSuccessStatus, completionStatus } =
    data;

  if (scormAPI) {
    scormAPI.SetValue('cmi.score.raw', scoreRaw);
    scormAPI.SetValue('cmi.score.min', scoreMin);
    scormAPI.SetValue('cmi.score.max', scoreMax);
    scormAPI.SetValue('cmi.success_status', scoreSuccessStatus);
    scormAPI.SetValue('cmi.completion_status', completionStatus);
    scormAPI.SetValue(
      'cmi.score.scaled',
      String(Number(scoreRaw) / Number(scoreMax))
    );
  }
};
