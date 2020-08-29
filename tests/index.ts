import makeServiceWorkerEnv from "service-worker-mock";

describe("Fetch event", (): void => {
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

    it("should trigger fetch event", async () => {
        jest.mock("~/handler");
        await import("~/index");
        const { default: handler } = await import("~/handler");

        expect(self.listeners.get("fetch")).toBeDefined();
        const request = new self.Request("/", {
            method: "GET",
        });
        await self.trigger("fetch", request);
        expect(handler).toBeCalled();
    });
});
