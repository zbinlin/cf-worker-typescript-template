import makeServiceWorkerEnv from "service-worker-mock";
import handleEvent from "~/handler";

describe("test handler", (): void => {
    beforeEach(async () => {
        Object.assign(
            globalThis,
            makeServiceWorkerEnv(),
            //makeFetchMock(),
            // If you're using sinon ur similar you'd probably use below instead of makeFetchMock
            // fetch: sinon.stub().returns(Promise.resolve())
        );
        jest.resetModules();
    });

    it("returns a response", async () => {
        const evt = new self.FetchEvent("fetch", {
            request: new self.Request("https://example.org/"),
        });
        const res = await handleEvent(evt);
        expect(res.status).toBe(200);
        expect(res.headers.get("content-type")).toBe("text/plain");
        expect(await res.text()).toBe(`Hello worker! ${evt.request.url}`);
    });
});
